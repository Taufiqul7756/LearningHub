'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b bg-white z-50 ">
      <div className="flex items-center justify-start gap-10 h-full px-4">
        <div className="flex items-center space-x-2">
          <Image src="/images/cs.png" alt="TAL Logo" width={32} height={32} className="rounded" />
          <span className="font-bold text-xl">csAltitude</span>
        </div>
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}
