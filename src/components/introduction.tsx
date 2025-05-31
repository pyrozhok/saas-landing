'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'motion/react';

import Tag from './ui/tag';
import { cn } from '@/utils/cn';

const text = `You're aiming to create outstanding work, but traditional design tools are holding you back because they're overly complicated and hard to learn.`;
const words = text.split(' ');

const Introduction = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });

  const [currentWord, setCurrentWord] = useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on('change', (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className='py-28 lg:py-40'>
      <div className='container'>
        <div className='sticky top-20 md:top-28 lg:top-40'>
          <div className='flex justify-center'>
            <Tag>Introducing Layers</Tag>
          </div>
          <div className='mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl'>
            <span>Elevate your creative process.</span>{' '}
            <span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    'text-white/15 transition duration-500',
                    index < currentWord && 'text-white',
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className='block text-lime-400'>
              That&apos;s why we created Layers.
            </span>
          </div>
        </div>
        <div className='h-[150vh]' ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
