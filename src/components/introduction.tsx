import Tag from './ui/tag';

const text = `You're aiming to create outstanding work, but traditional design tools are holding you back because they're overly complicated and hard to learn.`;

const Introduction = () => {
  return (
    <section className='py-28'>
      <div className='container'>
        <div className='flex justify-center'>
          <Tag>Introducing Layers</Tag>
        </div>
        <div className='mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl'>
          <span>Elevate your creative process.</span>{' '}
          <span className='text-white/15'>{text}</span>
          <span className='block text-lime-400'>
            That&apos;s why we created Layers.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
