import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { type FC, type ReactNode } from 'react';


export interface BasicLayoutProps {
  /**
   * The content to be rendered inside the layout
   */
  children: ReactNode;
  /**
   * Additional CSS classes to apply to the layout
   */
  className?: string;
}

export const BasicLayout: FC<BasicLayoutProps> = ({
  children,
  className = '',
}): ReactNode => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`.trim()}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
