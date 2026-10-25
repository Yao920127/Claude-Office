/**
 * IncidentBadge — "🔥 INCIDENT 00:04:12" with a live timer, shown in the
 * chat header while incident mode is on. Keeps its own 1 s interval so the
 * rest of the app does not re-render every second.
 */

import React, { useEffect, useReducer } from 'react'
import { useIncident, formatClock } from '../incident'
import { t, useLocale } from '../i18n'

const IncidentBadge: React.FC = () => {
  const incident = useIncident()
  useLocale() // Why: re-render the badge's t() strings on a language toggle
  const active = incident.variant === 'incident'
  const [, tick] = useReducer((n: number) => n + 1, 0)

  useEffect(() => {
    if (!active) return
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [active])

  if (!active) return null
  const elapsed = Date.now() - (incident.startedAt ?? Date.now())
  const what = incident.mini ? t('incident.badge.mini') : t('incident.badge.incident')
  return (
    <div
      className="slack-incident-banner"
      title={incident.pinned ? t('incident.badge.pinned') : t('incident.badge.hint')}
    >
      <span className="slack-incident-dot" />
      🔥 {what} {formatClock(elapsed)}
    </div>
  )
}

export default IncidentBadge
