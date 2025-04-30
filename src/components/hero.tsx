import Image from 'next/image';

import Button from '@/components/ui/button';
import Pointer from './pointer';
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';

const Hero = () => {
  return (
    <section className='overflow-clip py-24'>
      <div className='relative container'>
        <div className='absolute top-16 -left-32 hidden lg:block'>
          <Image src={designExample1Image} alt='Design example 1' />
        </div>
        <div className='absolute -top-16 -right-64 hidden lg:block'>
          <Image src={designExample2Image} alt='Design example 2' />
        </div>
        <div className='absolute top-96 left-56 hidden lg:block'>
          <Pointer name='Simon' />
        </div>
        <div className='absolute -top-4 right-80 hidden lg:block'>
          <Pointer name='Dan' color='red' />
        </div>
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

        <form className='mx-auto mt-8 flex max-w-lg items-center rounded-full border border-white/15 pr-2'>
          <input
            className='flex-grow border-none bg-transparent px-4 py-4 focus:ring-0 focus:outline-none'
            type='email'
            placeholder='Enter your email'
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
