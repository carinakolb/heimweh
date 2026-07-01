import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/unsubscribe')({
  head: () => ({
    meta: [
      { title: 'Abmelden - Souveraen Sein' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : '',
  }),
  component: UnsubscribePage,
})

type State =
  | { kind: 'loading' }
  | { kind: 'valid' }
  | { kind: 'already' }
  | { kind: 'invalid' }
  | { kind: 'success' }
  | { kind: 'error'; message: string }

function UnsubscribePage() {
  const { token } = Route.useSearch()
  const [state, setState] = useState<State>({ kind: 'loading' })

  useEffect(() => {
    let cancelled = false
    if (!token) {
      setState({ kind: 'invalid' })
      return
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return
        if (data.valid) setState({ kind: 'valid' })
        else if (data.reason === 'already_unsubscribed') setState({ kind: 'already' })
        else setState({ kind: 'invalid' })
      })
      .catch(() => !cancelled && setState({ kind: 'error', message: 'Netzwerkfehler' }))
    return () => {
      cancelled = true
    }
  }, [token])

  const confirm = async () => {
    setState({ kind: 'loading' })
    try {
      const res = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data.success) setState({ kind: 'success' })
      else if (data.reason === 'already_unsubscribed') setState({ kind: 'already' })
      else setState({ kind: 'error', message: data.error ?? 'Fehler beim Abmelden' })
    } catch {
      setState({ kind: 'error', message: 'Netzwerkfehler' })
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8f3e8',
        color: '#281c12',
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: 520, textAlign: 'center' }}>
        <p
          style={{
            letterSpacing: '0.4em',
            fontSize: 11,
            color: '#c49e5c',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Souveraen Sein
        </p>
        {state.kind === 'loading' && <p>Einen Moment bitte...</p>}
        {state.kind === 'valid' && (
          <>
            <h1 style={{ fontSize: 26, fontWeight: 400, marginBottom: 16 }}>
              MOECHTEST DU DICH ABMELDEN?
            </h1>
            <p style={{ opacity: 0.8, marginBottom: 28, lineHeight: 1.6 }}>
              Wenn du bestaetigst, erhaeltst du keine weiteren E-Mails mehr von uns.
            </p>
            <button
              onClick={confirm}
              style={{
                background: '#1c120a',
                color: '#f8f3e8',
                padding: '14px 28px',
                border: '1px solid #c49e5c',
                letterSpacing: '0.2em',
                fontSize: 13,
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Ja, abmelden
            </button>
          </>
        )}
        {state.kind === 'already' && (
          <p style={{ lineHeight: 1.6 }}>
            Du bist bereits abgemeldet. Du erhaeltst keine weiteren E-Mails von uns.
          </p>
        )}
        {state.kind === 'invalid' && (
          <p style={{ lineHeight: 1.6 }}>
            Dieser Link ist ungueltig oder abgelaufen.
          </p>
        )}
        {state.kind === 'success' && (
          <p style={{ lineHeight: 1.6 }}>
            Du bist abgemeldet. Alles Liebe auf deinem Weg.
          </p>
        )}
        {state.kind === 'error' && (
          <p style={{ lineHeight: 1.6, color: '#8b2e2e' }}>
            {state.message}. Bitte spaeter noch einmal versuchen.
          </p>
        )}
      </div>
    </main>
  )
}