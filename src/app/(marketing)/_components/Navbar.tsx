import BrandLogo from '@/components/BrandLogo';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95'>
      <nav className='flex items-center gap-10 container font-semibold'>
        <Link href='/' className='mx-auto'>
          <BrandLogo />
        </Link>
        <Link className='text-lg' href='#'>
          Features
        </Link>
        <Link className='text-lg' href='/#pricing'>
          Pricing
        </Link>
        <Link className='text-lg' href='#'>
          About
        </Link>
        <span className='text-lg'>
          {/* Only for signed in users */}
          <SignedIn>
            <Link href='/dashboard'>
              Dashboard
            </Link>
          </SignedIn>
          {/* Only for signed out users */}
          <SignedOut>
            <SignInButton>
              Login
            </SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;