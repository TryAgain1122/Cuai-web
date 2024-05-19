
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from "next/font/google";
import ThemeSwitch from './components/ThemeSwitch';
import Provider from './Provider';

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Center for Urban Agriculture in Innovation',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}> 
            <Provider>
              <ThemeSwitch />
              {children}
            </Provider>
          </body>
    </html>
  )
}
