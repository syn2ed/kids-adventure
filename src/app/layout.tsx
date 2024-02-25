import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react"

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Multi Step Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //<NextUIProvider>
    <html lang="en" className='antialiased'>
      <body className={ubuntu.className}>{children}</body>
    </html>
    //</NextUIProvider>
  )
}
