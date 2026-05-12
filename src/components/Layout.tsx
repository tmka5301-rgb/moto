import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 font-sans bg-dotted relative flex flex-col">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-dark-bg/80 via-dark-bg/95 to-dark-bg z-[-1]" />
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
