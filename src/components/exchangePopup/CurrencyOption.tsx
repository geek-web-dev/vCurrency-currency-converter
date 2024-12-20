import { useCalcContext } from "../../contexts/CalcContext";
import { useCurrencyContext } from "../../contexts/CurrencyContext";

const CurrencyOption = ({
  currencySymbol,
  currencyName,
}: {
  currencySymbol: string;
  currencyName: string;
}) => {
  const {
    closeExchangePopup,
    currencyExchangeAction,
    setTargetCurrencies,
    setBaseCurrency,
  } = useCurrencyContext();
  const { setBaseCalcCurrency, setTargetCalcCurrency } = useCalcContext();

  const action = () => {
    switch (currencyExchangeAction) {
      case "changeBase":
        setBaseCalcCurrency(currencySymbol);
        break;

      case "changeTarget":
        setTargetCalcCurrency(currencySymbol);
        break;

      case "changeBaseList":
        setBaseCurrency(currencySymbol);
        break;

      case "addTarget":
        setTargetCurrencies((p) => [...p, currencySymbol]);
        break;
    }
    closeExchangePopup();
  };

  return (
    <div
      className="p-4 rounded-md bg-[--surface-t] hover:bg-[--surface-q] flex items-center justify-between cursor-pointer duration-150"
      onClick={action}
    >
      <img
        src={`https://currencyfreaks.com/photos/flags/${currencySymbol.toLowerCase()}.png?v=0.1`}
        alt="currency"
        className="size-10"
        loading="lazy"
      />
      <div className="flex flex-col items-end gap-1 ml-2">
        <span className="text-[--text-q] font-medium">{currencySymbol}</span>
        <span className="text-sm text-[--text-p] line-clamp-1">
          {currencyName}
        </span>
      </div>
    </div>
  );
};

export default CurrencyOption;
