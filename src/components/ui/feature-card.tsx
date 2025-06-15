import { FC, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface FeatureCardProps {
  className?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({
  className,
  title,
  description,
  children,
}) => {
  return (
    <div
      className={cn(
        'rounded-3xl border-white/10 bg-neutral-900 p-6',
        className,
      )}
    >
      <div className='aspect-video'>{children}</div>
      <div>
        <h3 className='mt-6 text-3xl font-medium'>{title}</h3>
        <p className='mt-2 tracking-wide text-white/50'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
