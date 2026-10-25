/**
 * i18n.ts — language state for the UI (English / Traditional Chinese).
 *
 * Same shape as theme.ts: module-level state + listener set + localStorage
 * persistence + a useSyncExternalStore hook, so every component re-renders
 * on a language change without prop drilling.
 *
 * Detection: navigator.language decides the default (zh* -> zh-TW, else en).
 * A manual pick via setLocale() is persisted and wins over detection on the
 * next load.
 */

import { useSyncExternalStore } from 'react'
import { en } from './locales/en'
import { zhTW } from './locales/zh-TW'

export type Locale = 'en' | 'zh-TW'

const LOCALE_KEY = 'agent-office-locale'

const DICTS: Record<Locale, Record<string, string>> = { en, 'zh-TW': zhTW }

function detectLocale(): Locale {
  try {
    return navigator.language.toLowerCase().startsWith('zh') ? 'zh-TW' : 'en'
  } catch {
    return 'en'
  }
}

function loadInitial(): Locale {
  try {
    const saved = localStorage.getItem(LOCALE_KEY)
    if (saved === 'en' || saved === 'zh-TW') return saved
  } catch {}
  return detectLocale()
}

let state: Locale = loadInitial()
const listeners = new Set<() => void>()

function persist() {
  try { localStorage.setItem(LOCALE_KEY, state) } catch {}
}

function emit() { listeners.forEach(l => l()) }

export function getLocale(): Locale { return state }

export function setLocale(locale: Locale) {
  if (locale === state) return
  state = locale
  persist()
  emit()
}

export function toggleLocale() {
  setLocale(state === 'en' ? 'zh-TW' : 'en')
}

export function useLocale(): Locale {
  return useSyncExternalStore(
    l => { listeners.add(l); return () => listeners.delete(l) },
    () => state,
    () => state,
  )
}

function interpolate(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match))
}

/** Look up `key` in the current locale, falling back to English, then the key itself. */
export function t(key: string, vars?: Record<string, string | number>): string {
  const str = DICTS[state][key] ?? en[key] ?? key
  return vars ? interpolate(str, vars) : str
}

/** For non-component code that needs the current dictionary without subscribing. */
export function tFor(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  const str = DICTS[locale][key] ?? en[key] ?? key
  return vars ? interpolate(str, vars) : str
}
