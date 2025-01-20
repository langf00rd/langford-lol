import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: {
    template: '%s'
  }
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {/* <Link href="mailto:langfordquarshie21@gmail.com?subject=Reaching Out From Your Portfolio Website&body=I want to hire you for ">
          <div className="fixed animate-bounce bottom-20 right-10 md:right-20 text-sm pt-1 pb-[5px] shadow-2xl bg-blue-600 text-white px-3 rounded-full">
            Hire me 👋
          </div>
        </Link> */}
        <div className="p-5 max-w-3xl mx-auto">
          <main>{children}</main>
          {/* <footer className="text-center pt-2">
            <span className="text-sm text-center text-gray-500">
              © {new Date().getFullYear()} Langford K. Quarshie . All Rights
              Reserved.
            </span>
          </footer> */}
        </div>
      </body>
    </html>
  )
}
