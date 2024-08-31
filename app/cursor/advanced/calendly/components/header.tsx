import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/cursor/advanced/calendly" className="text-2xl font-bold text-blue-600">
          Calendly Clone
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Availability</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Integrations</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}