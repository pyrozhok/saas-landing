'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimate } from 'motion/react';

import Button from '@/components/ui/button';
import Pointer from './pointer';
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import cusrosYouImage from '@/assets/icons/cursor-you.svg';

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      leftDesignAnimate(leftDesignScope.current, { opacity: 1, x: 0, y: 0 });
      leftPointerAnimate(leftPointerScope.current, {
        opacity: 1,
        x: -100,
        y: 0,
      });
      rightDesignAnimate(rightDesignScope.current, { opacity: 1, x: 0, y: 0 });
      rightPointerAnimate(rightPointerScope.current, {
        opacity: 1,
        x: 70,
        y: 0,
      });
      return;
    }

    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 10, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);

    // with (1.5 seconds) until prev animation is done
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: -15 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 70, y: [0, 10, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);
  }, [
    leftDesignAnimate,
    leftDesignScope,
    leftPointerAnimate,
    leftPointerScope,
    rightDesignAnimate,
    rightDesignScope,
    rightPointerAnimate,
    rightPointerScope,
  ]);

  return (
    <section
      className='overflow-clip py-24'
      style={{ cursor: `url(${cusrosYouImage.src}), auto` }}
    >
      <div className='relative container'>
        <motion.div
          className='absolute top-16 -left-32 hidden lg:block'
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -100, y: 100 }}
          drag
        >
          <Image
            src={designExample1Image}
            alt='Design example 1'
            draggable='false'
          />
        </motion.div>
        <motion.div
          className='absolute top-96 left-56 hidden lg:block'
          ref={leftPointerScope}
          initial={{ opacity: 0, x: -200, y: 100 }}
        >
          <Pointer name='Julia' />
        </motion.div>
        <motion.div
          className='absolute -top-16 -right-64 hidden lg:block'
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: -100 }}
          drag
        >
          <Image
            src={designExample2Image}
            alt='Design example 2'
            draggable='false'
            priority
          />
        </motion.div>
        <motion.div
          className='absolute -top-4 right-80 hidden lg:block'
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: -100 }}
        >
          <Pointer name='Dan' color='red' />
        </motion.div>
        <div className='flex justify-center'>
          <p className='inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950'>
            ✨ $7.5M seed round raised
          </p>
        </div>
        <h1 className='mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl'>
          Impactful design, created effortlessly
        </h1>

        <p className='max mx-auto mt-8 max-w-2xl text-center text-xl tracking-wide text-white/50'>
          Desing toold shouldn&apos;t slow you down. Layers combines powerful
          feature with an intuitive iterface that keeps you in your creative
          frow.
        </p>

        <form className='mx-auto mt-10 flex max-w-lg items-center rounded-full border border-white/15 pr-2'>
          <label htmlFor='hero-email-input' className='sr-only'>
            Enter your email
          </label>
          <input
            className='flex-grow border-none bg-transparent px-4 py-4 focus:ring-2 focus:ring-offset-2'
            id='hero-email-input'
            type='email'
            placeholder='Enter your email'
            required
          />
          <Button
            className='whitespace-nowrap'
            type='submit'
            variant='primary'
            size='sm'
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
