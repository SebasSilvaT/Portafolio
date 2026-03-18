import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desarrollador Fullstack | Portafolio',
  description: 'Portafolio profesional de desarrollador fullstack en tecnologías empresariales y modernas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-neutral-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
