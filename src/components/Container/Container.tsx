import { cva, type VariantProps } from 'class-variance-authority';
import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const container = cva(
  [
    'mx-auto',
    'max-w-7xl',
  ],
  {
    variants: {
      padding: {
        none: [],
        sm: ['px-4'],
        md: ['px-6'],
        lg: ['px-8'],
      },
      width: {
        full: ['max-w-full'],
        normal: ['max-w-7xl'],
        narrow: ['max-w-5xl'],
      }
    },
    defaultVariants: {

      padding: 'md',
      width: 'normal',
    },
  }
);

export interface ContainerProps extends PropsWithChildren, VariantProps<typeof container> {
  /**
   * Additional CSS classes to apply to the container
   */
  className?: string;
}

/**
 * Container component that provides a centered, max-width wrapper with responsive padding
 */
export function Container({
  className,
  padding,
  width,
  children
}: ContainerProps): React.ReactElement {
  return (
    <div className={twMerge(container({ padding, width, className }))}>
      {children}
    </div>
  );
}
