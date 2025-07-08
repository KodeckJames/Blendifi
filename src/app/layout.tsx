import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import HeaderSection from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProviders'
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// const defaultUrl = process.env.VERCEL_URL
  // ? `https://hygeia-starknet.vercel.app`
//   : 'http://localhost:3000'

export const metadata: Metadata = {
  // metadataBase: new URL(defaultUrl),
  title: 'Blendify',
  description:
    'Blendify is a modern DeFi platform built on the Stellar network that lets you swap, supply, borrow, and stake crypto assets like XLM, BLND, USDC, wETH, and wBTC—all in one secure, user-friendly interface.',

  keywords: [
    'Stellar DeFi',
    'DeFi on Stellar',
    'Blendify app',
    'crypto swap Stellar',
    'stake XLM',
    'stake BLND',
    'borrow crypto Stellar',
    'supply crypto Stellar',
    'USDC on Stellar',
    'wETH on Stellar',
    'wBTC on Stellar',
    'DeFi wallet Stellar',
    'Stellar blockchain finance',
    'decentralized finance Stellar',
    'crypto portfolio tracker',
    'web3 Stellar app',
    'Clerk auth DeFi',
    'DeFi app Next.js',
    'DeFi dashboard Stellar',
    'decentralized trading Stellar',
  ],

  authors: [{ name: 'Blendify Team' }],
  creator: 'Blendify',

  openGraph: {
    title: 'Blendify - A modern DeFi hub',
    description:
      'A modern DeFi platform built on the Stellar network that lets you swap, supply, borrow, and stake crypto assets like XLM, BLND, USDC, wETH, and wBTC—all in one secure, user-friendly interface.',
    // url: 'https://hygeia-starknet.vercel.app',
    siteName: 'Blendify',
    images: [
      {
        url: '/images/Blendify.png', // Ensure this path works in prod
        width: 1200,
        height: 630,
        alt: 'Blendify Logo',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Hygeia - Menstrual Health on the Blockchain',
  //   description:
  //     'Making menstrual products more accessible, affordable, and transparent for girls across Kenya.',
  //   images: ['/images/logo.png'],
  //   creator: 'https://x.com/JJ638055109535', // optional if you have a Twitter/X handle
  // },

  icons: {
    icon: '/images/Blendify.png',
    shortcut: '/images/Blendify.png',
    apple: '/images/Blendify.png', // optional
  },

  // alternates: {
  //   canonical: 'https://hygeia-starknet.vercel.app',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <HeaderSection />
              <main className=" dark:!bg-black bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 min-h-screen ">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
