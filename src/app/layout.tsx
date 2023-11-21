import type { Metadata} from 'next'
import type { Author } from 'next/dist/lib/metadata/types/metadata-types';
import { Inter } from 'next/font/google'
import './globals.css';
import { Header,Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] })
const author = 'AJAYI TAIWO OYETOMI' as Author;
export const metadata: Metadata = {
  title: 'Frontend Tech Test',
  description: 'Frontend application created by Ajayi Taiwo Oyetomi',
  authors:[author]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
