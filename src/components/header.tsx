'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/icons/logo.svg';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'motion/react';
import Button from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/utils/cn';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQS', href: '#faqs' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLineClasses = 'transition-all duration-300 ease-in-out';

  const topLineClasses = cn(
    baseLineClasses,
    'origin-left',
    isOpen && 'rotate-45 translate-y-[-4px]',
  );

  const middleLineClasses = cn(baseLineClasses, isOpen && 'opacity-0');

  const bottomLineClasses = cn(
    baseLineClasses,
    'origin-left',
    isOpen && '-rotate-45 translate-y-[4px]',
  );

  return (
    <>
      <header className='fixed top-0 z-50 w-full py-4 lg:py-8'>
        <div className='container max-w-5xl'>
          <div className='rounded-[27px] border border-white/15 bg-neutral-950/70 backdrop-blur md:rounded-full'>
            <div className='grid grid-cols-2 items-center px-4 py-2 md:pr-2 lg:grid-cols-3'>
              <Link href='/'>
                <span className='sr-only'>Layers</span>
                <Image
                  className='h-9 w-auto md:h-auto'
                  src={logo}
                  alt=''
                  priority
                />
              </Link>
              <div className='hidden items-center justify-center lg:flex'>
                <nav className='flex gap-x-6 font-medium'>
                  {navLinks.map(({ label, href }) => (
                    <Link
                      className='text-neutral-300 transition-colors duration-200 ease-in-out hover:text-white focus-visible:text-white focus-visible:outline-none'
                      key={label}
                      href={href}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className='flex justify-end gap-x-4'>
                <button
                  className='cursor-pointer md:hidden'
                  aria-label={
                    isOpen ? 'Close navigation menu' : 'Open navigation menu'
                  }
                  aria-expanded={isOpen}
                  aria-controls='mobile-nav-menu'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <line
                      x1='3'
                      x2='21'
                      y1='6'
                      y2='6'
                      className={topLineClasses}
                    />
                    <line
                      x1='3'
                      x2='21'
                      y1='12'
                      y2='12'
                      className={middleLineClasses}
                    />
                    <line
                      x1='3'
                      x2='21'
                      y1='18'
                      y2='18'
                      className={bottomLineClasses}
                    />
                  </svg>
                </button>
                <Button className='hidden md:inline-flex' variant='secondary'>
                  Log In
                </Button>
                <Button className='hidden md:inline-flex' variant='primary'>
                  Sign Up
                </Button>
              </div>
            </div>
            <LazyMotion features={domAnimation}>
              <AnimatePresence>
                {isOpen && (
                  <m.div
                    id='mobile-nav-menu'
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className='overflow-hidden'
                  >
                    <div className='flex flex-col items-center gap-y-2 py-4'>
                      {navLinks.map(({ label, href }) => (
                        <Link className='' key={label} href={href}>
                          {label}
                        </Link>
                      ))}
                      <Button variant='secondary'>Log In</Button>
                      <Button variant='primary'>Sign Up</Button>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </LazyMotion>
          </div>
        </div>
      </header>
      <div className='pb-[86px] md:pb-[98px] lg:pb-[130px]'></div>
    </>
  );
};
export default Header;
