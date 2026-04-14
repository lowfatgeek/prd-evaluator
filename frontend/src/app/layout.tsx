import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'PRDmetrix | Evaluate Your App PRD For FREE',
  description: 'AI-powered PRD quality assessment tool.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans text-on-surface antialiased overflow-x-hidden min-h-screen relative`}>
        {/* Ambient Light Effects */}
        <div className="fixed top-[-10%] left-[10%] w-[60%] h-[40%] bg-[#f77f00]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-10%] right-[10%] w-[60%] h-[40%] bg-[#024b73]/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {children}
      </body>
    </html>
  );
}
