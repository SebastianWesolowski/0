export const formatPrice = (price: number): string => {
  const roundedPrice = Math.round(price * 100) / 100;
  const [whole, decimal = '00'] = roundedPrice.toString().split('.');
  const formattedWhole = whole?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') ?? '';
  const formattedDecimal = decimal.padEnd(2, '0');
  return `${formattedWhole},${formattedDecimal} zł`;
};
