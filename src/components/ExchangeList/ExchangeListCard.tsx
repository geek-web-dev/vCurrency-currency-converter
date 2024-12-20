import { Minus } from "lucide-react";
import { formmatNumber } from "../../libs/utils";
import CurrencyImage from "../common/CurrencyImage";
import { useCurrencyContext } from "../../contexts/CurrencyContext";

const ExchangeListCard = ({
  currencyVal,
  currencyCode,
}: {
  currencyVal: number;
  currencyCode: string;
}) => {
  const { setTargetCurrencies } = useCurrencyContext();

  const removeTargetCurrency = (currencyCode: string) => {
    setTargetCurrencies((p) => p.filter((e) => e !== currencyCode));
  };

  return (
    <div className="relative p-4 rounded-md space-y-4 border border-[--border-s] text-[--text-p] overflow-x-auto">
      <div className="flex justify-between gap-2">
        <h1 className="text-4xl font-medium">{formmatNumber(currencyVal)}</h1>

        <div
          className="p-2 rounded-md flex justify-center items-center border border-[--border-s] hover:bg-[--primary] hover:text-white duration-150 cursor-pointer"
          onClick={() => removeTargetCurrency(currencyCode)}
        >
          <Minus />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <CurrencyImage currencyCode={currencyCode} />
        <span>{currencyCode}</span>
      </div>
    </div>
  );
};

export default ExchangeListCard;
