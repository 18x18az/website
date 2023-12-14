import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const cooper = localFont({
  src: [
    {
      path: '../../public/fonts/cooper-hewitt/CooperHewitt-Book.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/cooper-hewitt/CooperHewitt-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/cooper-hewitt/CooperHewitt-Semibold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/cooper-hewitt/CooperHewitt-Bold.woff',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-cooper-hewitt'
})

const APP_NAME = '18x18 Connect'
const APP_DEFAULT_TITLE = '18x18az'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'Make the most out of Arizona VRC tournaments with 18x18 Connect.'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${cooper.variable}`}>
        {children}
      </body>
    </html>
  )
}
