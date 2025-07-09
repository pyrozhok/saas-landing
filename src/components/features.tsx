import Image from 'next/image';

import Avatar from '@/components/ui/avatar';
import Tag from '@/components/ui/tag';
import FeatureCard from '@/components/ui/feature-card';
import Key from '@/components/ui/key';

import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg';
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg';

const features = [
  'Asset Library',
  'Code Preview',
  'Flow Mode',
  'Smart Sync',
  'Auto Layout',
  'Fast Search',
  'Smart Guides',
];

const Features = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <Tag>Features</Tag>
        </div>
        <h2 className='mx-auto mt-6 max-w-2xl text-center text-6xl font-medium'>
          Where power meets{' '}
          <span className='tracking-wide text-lime-400'>simplicity</span>
        </h2>
        <ul className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3'>
          <li className='md:col-span-2 lg:col-span-1'>
            <FeatureCard
              title='Real-time Collaboration'
              description='Work together seamlessly with conflict-free editing'
              className='group'
            >
              <div className='flex aspect-video items-center justify-center'>
                <Avatar className='z-40'>
                  <Image
                    className='rounded-full'
                    src={avatar1}
                    alt='Avatar 1'
                  />
                </Avatar>
                <Avatar className='z-30 -ml-6 border-indigo-500'>
                  <Image
                    className='rounded-full'
                    src={avatar2}
                    alt='Avatar 2'
                  />
                </Avatar>
                <Avatar className='z-20 -ml-6 border-amber-500'>
                  <Image
                    className='rounded-full'
                    src={avatar3}
                    alt='Avatar 3'
                  />
                </Avatar>
                <Avatar className='-ml-6 rounded-full border-transparent transition group-hover:border-green-500'>
                  <div className='relative inline-flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700'>
                    <Image
                      className='absolute size-full rounded-full opacity-0 transition group-hover:opacity-100'
                      src={avatar4}
                      alt='Avatar 4'
                    />
                    {Array.from({ length: 3 }).map((_, index) => (
                      <span
                        key={`dot-${index}`}
                        className='inline-flex size-1.5 rounded-full bg-white'
                      ></span>
                    ))}
                  </div>
                </Avatar>
              </div>
            </FeatureCard>
          </li>
          <li className='md:col-span-2 lg:col-span-1'>
            <FeatureCard
              title='Interactive Prototyping'
              description='Engage your clients with prototypes that react to user actions'
            >
              <div className='flex aspect-video items-center justify-center'>
                <p className='text-center text-3xl font-extrabold text-white/20'>
                  We&apos;ve achieved
                  <br />
                  <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    incredible
                  </span>
                  <br />
                  growth this year
                </p>
              </div>
            </FeatureCard>
          </li>
          <li className='md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto'>
            <FeatureCard
              title='Keyboard Quick Actions'
              description='Powerful commands to help you create designs more quickly'
              className='group'
            >
              <div className='flex aspect-video items-center justify-center gap-4'>
                <Key className='w-28 outline-2 outline-offset-4 outline-transparent transition-all duration-500 group-hover:translate-y-1 group-hover:outline-lime-400'>
                  shift
                </Key>
                <Key className='outline-2 outline-offset-4 outline-transparent transition-all delay-150 duration-500 group-hover:translate-y-1 group-hover:outline-lime-400'>
                  alt
                </Key>
                <Key className='outline-2 outline-offset-4 outline-transparent transition-all delay-300 duration-500 group-hover:translate-y-1 group-hover:outline-lime-400'>
                  C
                </Key>
              </div>
            </FeatureCard>
          </li>
        </ul>
        <ul className='mt-8 flex flex-wrap justify-center gap-3'>
          {features.map((feature) => (
            <li
              key={feature}
              className='group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-3 py-1.5 transition duration-500 hover:scale-105 md:px-5 md:py-2'
            >
              <span className='inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-950 transition duration-500 group-hover:rotate-45'>
                &#10038;
              </span>
              <span className='font-medium tracking-wide md:text-lg'>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
