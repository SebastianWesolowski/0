import { formatPrice } from '@/utils/formatPrice';
import { type FC } from 'react';

interface PriceDisplayProps {
  price: number;
  className?: string;
}

export const PriceDisplay: FC<PriceDisplayProps> = ({ price, className }) => {
  return (
    <span className={className} data-testid="price-display">
      {formatPrice(price)}
    </span>
  );
};
