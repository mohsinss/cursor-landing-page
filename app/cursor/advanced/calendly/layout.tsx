import React from 'react';
import Header from './components/header';

export default function CalendlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}