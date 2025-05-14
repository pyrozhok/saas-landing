'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

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
  return (
    <section className='overflow-x-clip py-24'>
      <div className='container'>
        <h3 className='text-center text-xl tracking-wide text-white/50'>
          Already chosen by these market leaders
        </h3>
        <div className='mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <motion.div
            animate={{
              x: '-50%',
            }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            className='flex flex-none gap-24 pr-24'
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logosImages.map(({ name, image }) => (
                  <Image key={name} src={image} alt={name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
