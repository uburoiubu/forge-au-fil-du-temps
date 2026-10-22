import Link from 'next/link'
import LogoutButton from './components/LogoutButton'

export const metadata = { title: 'Administration — La Forge' }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4 flex items-center justify-between">
        <Link href="/admin" className="font-semibold hover:underline">
          La Forge — Administration
        </Link>
        <LogoutButton />
      </header>
      <main className="max-w-3xl mx-auto p-6">{children}</main>
    </div>
  )
}
