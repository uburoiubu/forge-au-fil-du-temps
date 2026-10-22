'use client'

import { signOut } from '../actions'

export default function LogoutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="text-sm text-neutral-400 hover:text-neutral-700 transition"
      >
        Déconnexion
      </button>
    </form>
  )
}
