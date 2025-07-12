import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b">
        <nav className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
              C-Suite.xyz
            </Link>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Pricing" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <p>&copy; 2024 C-Suite.xyz. Empowering executive leaders and innovators worldwide.</p>
        </div>
      </footer>
    </div>
  )
}