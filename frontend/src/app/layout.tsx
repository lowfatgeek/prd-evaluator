import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'PRDmetrix | Evaluate Your App PRD For FREE',
  description: 'Evaluate your Product Requirements Document for FREE. PRDMetrix analyzes PRDs for web and mobile app development with scoring, insights, and improvement suggestions.',
  keywords: 'product requirements document evaluation, PRD evaluation tool, AI PRD analysis, evaluate product requirements document, PRD review tool, product requirements document analysis, PRD quality assessment, AI product documentation review, PRD for app development, product requirements document checklist',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
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
