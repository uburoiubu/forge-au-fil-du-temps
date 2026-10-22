'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({ email, password })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      window.location.href = '/admin'
    } catch (err) {
      setError('Erreur de connexion. Vérifiez la console.')
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-1 text-center">La Forge</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-6">Administration</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
              className="w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>
          {error && (
            <p className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-950 rounded-lg px-3 py-2">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 py-2.5 rounded-lg text-base font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 disabled:opacity-50 transition"
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
