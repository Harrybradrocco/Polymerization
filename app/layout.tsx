import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exploring Polymers',
  description: 'Learn about polymer types, formation, and properties',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">Polymer Explorer</Link>
              <div className="flex space-x-4">
                <Link href="/types" className="text-gray-700 hover:text-gray-900">Types</Link>
                <Link href="/formation" className="text-gray-700 hover:text-gray-900">Formation</Link>
                <Link href="/crystallinity" className="text-gray-700 hover:text-gray-900">Crystallinity</Link>
                <Link href="/hardness" className="text-gray-700 hover:text-gray-900">Hardness</Link>
                <Link href="/fiber-reinforced-composites" className="text-gray-700 hover:text-gray-900">Composites</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

