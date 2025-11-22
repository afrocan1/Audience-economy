/* eslint-disable camelcase */
/* eslint-disable react-refresh/only-export-components */
import './global.css'

import type { Metadata } from 'next'
import {
  Nunito_Sans,
  Wix_Madefor_Display,
  Wix_Madefor_Text,
} from 'next/font/google'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Home | The Rookie Brand',
  description:
    'The rookie brand facilitates the connection between artists and major digital platforms, offering global distribution and specialized support',
  keywords: [
    'Rookie Brand',
    'Audience economy digital music',
    'music',
    'artist',
    'música',
    'artista',
    'distribuidora musical',
    'bewave distribuidora digital',
  ],
  authors: [
    {
      name: 'Lucas Gabriel',
      url: 'https://github.com/LuquinhasGCZJ',
    },
    {
      name: 'Murilo Loiola',
      url: 'https://github.com/murilo-dan',
    },
    {
      name: 'Pietro Rhyan',
      url: 'https://github.com/PietroRhyan',
    },
  ],
  applicationName: 'The Rookie Brand',
  icons: {
    icon: './5e911001-b98a-47f9-bae2-d42c99144c0c_removalai_preview.png',
    apple: './5e911001-b98a-47f9-bae2-d42c99144c0c_removalai_preview.png',
    shortcut: './5e911001-b98a-47f9-bae2-d42c99144c0c_removalai_preview.png',
  },
}

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-nunito-sans',
})

const madeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-madefor-display',
})

const madeforText = Wix_Madefor_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${madeforText.className} ${madeforDisplay.variable} ${nunitoSans.variable} bg-black text-marfin min-h-screen flex flex-col justify-between px-5`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
