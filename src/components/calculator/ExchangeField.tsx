import { useCurrencyContext } from "../../contexts/CurrencyContext";
import { formmatNumber } from "../../libs/utils";
import CurrencyImage from "../common/CurrencyImage";

const ExchangeField = ({
  currencyVal,
  currencyCode,
  isBase = true,
}: {
  currencyVal: string;
  currencyCode: string;
  isBase?: boolean;
}) => {
  const { openExchangePopup, setCurrencyExchangeAction } = useCurrencyContext();

  const action = () => {
    setCurrencyExchangeAction(isBase ? "changeBase" : "changeTarget");
    openExchangePopup();
  };

  return (
    <div className="flex items-center justify-between gap-2 text-[--text-p]">
      <span className="sm:text-4xl text-2xl">{formmatNumber(currencyVal)}</span>
      <div
        className="flex flex-col items-center group cursor-pointer"
        title="choose a currency"
        onClick={action}
      >
        <CurrencyImage currencyCode={currencyCode} />
        <span className="font-medium group-hover:underline">
          {currencyCode}
        </span>
      </div>
    </div>
  );
};

export default ExchangeField;
