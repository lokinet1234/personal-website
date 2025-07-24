import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  variant?: 'default' | 'accent' | 'subtle' | 'accent-soft';
  hasPadding?: boolean;
  isBorderless?: boolean;
  hasParallax?: boolean;
  id?: string;
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  as: Component = 'section',
  variant = 'default',
  hasPadding = true,
  isBorderless = false,
  hasParallax = false,
  id,
  ...props
}: SectionProps) {
  const baseClasses = 'relative w-full transition-colors duration-200';
  
  const variantClasses = {
    default: 'bg-white dark:bg-black text-gray-900 dark:text-white',
    accent: 'bg-gray-900 text-white dark:bg-white dark:text-black',
    'accent-soft': 'bg-gray-50 text-gray-900 dark:bg-gray-900/50 dark:text-white',
    subtle: 'bg-gray-50/50 text-gray-900 dark:bg-gray-900/30 dark:text-white',
  };

  const paddingClasses = hasPadding ? 'py-16 md:py-24' : '';
  const borderClasses = isBorderless 
    ? '' 
    : 'border-t border-gray-100 dark:border-gray-900';
  const parallaxClasses = hasParallax 
    ? 'parallax-layer parallax-layer-base' 
    : '';

  return (
    <Component 
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses,
        borderClasses,
        parallaxClasses,
        className
      )}
      id={id}
      {...props}
    >
      {hasParallax ? (
        <div className="parallax-container">
          <div className="parallax-layer parallax-layer-back">
            <div className="absolute inset-0 bg-grid-white/[0.03] dark:bg-grid-white/[0.05]" />
          </div>
          <div className="parallax-layer parallax-layer-base relative">
            <Container className={containerClassName}>
              {children}
            </Container>
          </div>
        </div>
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </Component>
  );
}

// Specific section variants for easier imports
type SectionVariantProps = Omit<SectionProps, 'variant'>;

export function SectionDefault(props: SectionVariantProps) {
  return <Section variant="default" {...props} />;
}

export function SectionAccent(props: SectionVariantProps) {
  return <Section variant="accent" {...props} />;
}

export function SectionSubtle(props: SectionVariantProps) {
  return <Section variant="subtle" {...props} />;
}

export function SectionAccentSoft(props: SectionVariantProps) {
  return <Section variant="accent-soft" {...props} />;
}