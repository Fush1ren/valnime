import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'VALNIME',
  description: 'Website Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${gabarito.className} bg-neutral-950`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
