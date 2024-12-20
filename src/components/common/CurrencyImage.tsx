const CurrencyImage = ({
  currencyCode,
  size = 40,
}: {
  currencyCode: string;
  size?: number;
}) => {
  return (
    <img
      src={`https://currencyfreaks.com/photos/flags/${currencyCode.toLowerCase()}.png?v=0.1`}
      alt="currency"
      style={{ width: size }}
      loading="lazy"
      className="rounded-md"
    />
  );
};

export default CurrencyImage;
