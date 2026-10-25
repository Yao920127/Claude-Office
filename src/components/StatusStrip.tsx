/**
 * StatusStrip — pipeline health along the bottom of the office: connection
 * (online / reconnecting / offline), when a Claude Code hook last reached the
 * server — or that none has, with the installer command — how many sessions
 * there are, how many of them are not hooked and how many need you, and the
 * server's version. The answer to "nothing appears".
 *
 * The health lives in the office reducer (OfficeState.health: `connection`
 * actions from useAgentSocket, `health` events from server/health.js). The
 * strip samples it once a second — the cadence its "12 s ago" label needs
 * anyway — so nothing else re-renders on its account. The session counts
 * come from the sessions list App.tsx already holds (useAgentSocket), the
 * records the title-bar pills draw, not from the throttled health report.
 * Under ?sim / ?video there is no server: only a SIM badge.
 *
 * When the server showed the page the office read-only (no office token, or
 * a stale one: src/officeToken.ts) an amber item says so and how to get the
 * link that fixes it.
 *
 * VITE_HOOK_WARN_MS (build-time, ms) lowers the 60 s "no hook events yet"
 * threshold, for screenshots and demos.
 */

import React, { useEffect, useState } from 'react'
import { hookVerdict, initialHealth, HOOK_WARN_MS, type HealthState, type HookVerdict, type OfficeState, type ConnectionPhase } from '../officeReducer'
import { needsYouLabel, stripCounts, type StripCounts } from '../mainState'
import type { SessionInfo } from '../types'
import { pillLabel } from './SessionStrip'
import { officeHttpBase } from '../serverUrl'
import { t, useLocale } from '../i18n'
import '../styles/strip.css'

const params = new URLSearchParams(window.location.search)
const MODE: 'live' | 'sim' | 'video' = params.has('video') ? 'video' : params.has('sim') ? 'sim' : 'live'
const WARN_MS = Number(import.meta.env.VITE_HOOK_WARN_MS) || HOOK_WARN_MS

const SERVER_URL  = officeHttpBase()
const START_CMD   = 'npm run server'
const START_ALT   = 'bash scripts/start-office.sh'
const INSTALL_CMD = 'npm run install-hooks'
const DOCTOR_CMD  = 'npm run doctor'
const OPEN_CMD    = 'npm run open'
function readOnlyHint(): string {
  return t('statusStrip.readOnlyHint', { cmd: OPEN_CMD })
}

function connectionLabel(phase: ConnectionPhase): string {
  switch (phase) {
    case 'connecting':   return t('statusStrip.connection.connecting')
    case 'online':       return t('statusStrip.connection.online')
    case 'reconnecting': return t('statusStrip.connection.reconnecting')
    case 'offline':      return t('statusStrip.connection.offline')
  }
}

interface StatusStripProps {
  /** The office state as App.tsx holds it (officeRef); sampled, not subscribed */
  office: { readonly current: OfficeState | null }
  /** The sessions App.tsx holds (useAgentSocket): counted, not-hooked and needs-you */
  sessions?: SessionInfo[]
  /** The server sent the office read-only (useAgentSocket's `trusted` is false) */
  readOnly?: boolean
}

/** "just now", "12 s ago", "3 min ago", "2 h ago" */
export function formatAgo(ms: number): string {
  const s = Math.floor(ms / 1000)
  if (s < 2) return t('statusStrip.justNow')
  if (s < 60) return t('statusStrip.secondsAgo', { n: s })
  const m = Math.floor(s / 60)
  if (m < 60) return t('statusStrip.minutesAgo', { n: m })
  const h = Math.floor(m / 60)
  if (h < 48) return t('statusStrip.hoursAgo', { n: h })
  return t('statusStrip.daysAgo', { n: Math.floor(h / 24) })
}

/** "45 s", "3 min", "2 h 05 min" */
export function formatSpan(ms: number): string {
  const s = Math.floor(ms / 1000)
  if (s < 60) return `${s} s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60)
  return `${h} h ${String(m % 60).padStart(2, '0')} min`
}

function clock(t: number): string {
  return new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

/** The hooks pill: text and tone */
function hooksPill(v: HookVerdict): { text: string; tone: 'ok' | 'warn' | 'dim' } {
  switch (v.kind) {
    case 'unknown': return { text: t('statusStrip.hooksUnknown'), tone: 'dim' }
    case 'seen':    return { text: t('statusStrip.hooksSeen', { ago: formatAgo(v.agoMs) }), tone: v.agoMs < 10 * 60_000 ? 'ok' : 'dim' }
    case 'waiting': return { text: t('statusStrip.hooksWaiting'), tone: 'dim' }
    case 'missing': return { text: t('statusStrip.hooksMissing', { cmd: INSTALL_CMD }), tone: 'warn' }
  }
}

/** The tooltip: what is going on and what to type */
function describe(h: HealthState, v: HookVerdict, now: number, c: StripCounts): string {
  const s = h.server
  const lines: Array<string | null> = []
  switch (h.connection) {
    case 'online':       lines.push(t('statusStrip.describe.online', { url: SERVER_URL, time: clock(h.connectionSince) })); break
    case 'connecting':   lines.push(t('statusStrip.describe.connecting', { url: SERVER_URL })); break
    case 'reconnecting': lines.push(t('statusStrip.describe.reconnecting', { url: SERVER_URL, ago: formatAgo(now - h.connectionSince) })); break
    case 'offline':      lines.push(t('statusStrip.describe.offline', { url: SERVER_URL })); break
  }
  if (h.connection === 'offline' || h.connection === 'reconnecting') {
    lines.push(t('statusStrip.describe.startFrom', { cmd: START_CMD, alt: START_ALT }))
  }
  switch (v.kind) {
    case 'seen':    lines.push(t(v.count === 1 ? 'statusStrip.describe.hooksSeen' : 'statusStrip.describe.hooksSeenPlural', { n: v.count, ago: formatAgo(v.agoMs) })); break
    case 'waiting': lines.push(t('statusStrip.describe.hooksWaiting')); break
    case 'missing': lines.push(t('statusStrip.describe.hooksMissing', { span: formatSpan(v.forMs), cmd: INSTALL_CMD })); break
    case 'unknown': break
  }
  if (s) {
    lines.push(t('statusStrip.describe.sessions', { sessions: s.sessions, agents: s.agents, clients: s.clients }))
    if (c.notHooked.length > 0) {
      lines.push(t(c.notHooked.length === 1 ? 'statusStrip.describe.notHooked' : 'statusStrip.describe.notHookedPlural', { list: c.notHooked.map(pillLabel).join(', '), cmd: INSTALL_CMD }))
    }
    if (c.needYou.length > 0) {
      lines.push(t('statusStrip.describe.waitingOnYou'))
      for (const session of c.needYou) {
        if (session.main?.needsYou) lines.push(`  ${pillLabel(session)} — ${needsYouLabel(session.main.needsYou)}`)
      }
    }
    lines.push(t('statusStrip.describe.serverVersion', {
      version: s.version,
      span: formatSpan(s.uptimeMs + Math.max(0, now - (h.reportedAt ?? now))),
      ui: s.uiAvailable ? t('statusStrip.describe.uiBuilt') : t('statusStrip.describe.uiDev'),
    }))
  }
  lines.push(t('statusStrip.describe.diagnose', { cmd: DOCTOR_CMD }))
  return lines.filter(Boolean).join('\n')
}

const StatusStrip: React.FC<StatusStripProps> = ({ office, sessions = [], readOnly = false }) => {
  useLocale() // Why: re-render the strip's t() strings on a language toggle
  // Sample the reducer's health once a second (also ticks the "ago" labels)
  const [view, setView] = useState(() => ({ health: office.current?.health ?? null, now: Date.now() }))
  useEffect(() => {
    if (MODE !== 'live') return
    const sample = () => setView({ health: office.current?.health ?? null, now: Date.now() })
    const timer = setInterval(sample, 1000)
    return () => clearInterval(timer)
  }, [office])

  if (MODE !== 'live') {
    return (
      <div className="status-badge sim" title={t('statusStrip.simTitle', { mode: MODE })} data-mode={MODE}>
        SIM
      </div>
    )
  }

  const h = view.health ?? initialHealth(view.now)
  const v = hookVerdict(h, view.now, WARN_MS)
  const pill = hooksPill(v)
  const s = h.server
  const down = h.connection === 'offline' || h.connection === 'reconnecting'
  const c = stripCounts(sessions)

  return (
    <div
      className="status-strip"
      role="status"
      aria-label={t('statusStrip.ariaLabel')}
      title={describe(h, v, view.now, c)}
      data-connection={h.connection}
      data-hooks={v.kind}
    >
      <span className="strip-item strip-conn">
        <span className="strip-dot" />
        {connectionLabel(h.connection)}
      </span>
      {readOnly && (
        <>
          <span className="strip-sep" />
          <span className="strip-item strip-readonly" title={readOnlyHint()} data-testid="strip-read-only">
            {t('statusStrip.readOnly')}<code>{OPEN_CMD}</code>
          </span>
        </>
      )}
      <span className="strip-sep" />
      <span className={`strip-item strip-hooks ${pill.tone}`}>{pill.text}</span>
      {s && (
        <>
          <span className="strip-sep" />
          <span className="strip-item strip-sessions">
            {c.sessionsText}
            {c.notHookedText && <><span className="strip-mid">·</span><span className="strip-unhooked">{c.notHookedText}</span></>}
            {c.needYouText && <><span className="strip-mid">·</span><span className="strip-needs-you">{c.needYouText}</span></>}
          </span>
        </>
      )}
      <span className="strip-spacer" />
      {down && <span className="strip-item strip-hint">{t('statusStrip.startIt')}<code>{START_CMD}</code></span>}
      {!down && v.kind === 'missing' && <span className="strip-item strip-hint"><code>{DOCTOR_CMD}</code></span>}
      {s && <span className="strip-item strip-version">v{s.version}</span>}
    </div>
  )
}

export default StatusStrip
