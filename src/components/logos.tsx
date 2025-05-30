'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'motion/react';

import quantumLogo from '@/assets/icons/quantum-logo.svg';
import acmeLogo from '@/assets/icons/acme-corp-logo.svg';
import echoValleyLogo from '@/assets/icons/echo-valley-logo.svg';
import pulseLogo from '@/assets/icons/pulse-logo.svg';
import outsideLogo from '@/assets/icons/outside-logo.svg';
import apexLogo from '@/assets/icons/apex-logo.svg';
import celestialLogo from '@/assets/icons/celestial-logo.svg';
import twiceLogo from '@/assets/icons/twice-logo.svg';

const logosImages = [
  { name: 'Quantum', image: quantumLogo },
  { name: 'Acme Corp', image: acmeLogo },
  { name: 'Echo Valley', image: echoValleyLogo },
  { name: 'Pulse', image: pulseLogo },
  { name: 'Outside', image: outsideLogo },
  { name: 'Apex', image: apexLogo },
  { name: 'Celestial', image: celestialLogo },
  { name: 'Twice', image: twiceLogo },
];

const Logos = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsPlaying(false);
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () =>
      mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  const animationControls =
    isPlaying && !prefersReducedMotion ? { x: '-50%' } : { x: '0%' };

  const transitionConfig =
    isPlaying && !prefersReducedMotion
      ? { duration: 30, ease: 'linear', repeat: Infinity }
      : { duration: 0 };

  return (
    <section className='overflow-x-clip py-24'>
      <div className='container'>
        <h3 className='text-center text-xl tracking-wide text-white/50'>
          Already chosen by these market leaders
        </h3>

        <div className='mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <LazyMotion features={domAnimation}>
            <m.div
              animate={animationControls}
              transition={transitionConfig}
              className='flex flex-none gap-24 pr-24'
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                  {logosImages.map(({ name, image }) => (
                    <Image
                      key={`${name}-${i}`}
                      src={image}
                      alt={name}
                      width={image.width || 150}
                      height={image.height || 50}
                    />
                  ))}
                </Fragment>
              ))}
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default Logos;
