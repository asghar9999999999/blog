import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Modern Blog',
    description: 'A modern blog built with Next.js and Tailwind CSS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                <main className="min-h-screen flex flex-col">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

