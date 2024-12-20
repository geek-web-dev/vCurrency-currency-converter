import { RefreshCcw } from "lucide-react";
import Calculator from "../components/calculator/Calculator";
import Line from "../components/common/Line";
import { useCalcContext } from "../contexts/CalcContext";
import { useCurrencyContext } from "../contexts/CurrencyContext";
import { formmatNumber } from "../libs/utils";
import { useNavigate } from "react-router-dom";

const CalculatorPage = () => {
  const { rateDate, currencyRateMap } = useCurrencyContext();
  const { baseCalcCurrency, targetCalcCurrency } = useCalcContext();
  const navigate = useNavigate();
  return (
    <div>
      <Calculator />
      <div className="mt-12">
        <Line />
        <div
          className="p-4 rounded-full flex justify-center items-center cursor-pointer duration-150 border border-[--border-s] hover:bg-[--primary] text-[--text-p] hover:text-white w-fit mx-auto -translate-y-1/2 bg-[--surface-p]"
          onClick={() => navigate(0)}
        >
          <RefreshCcw />
        </div>
      </div>
      <div className="space-y-4 text-center">
        <p>
          1 {baseCalcCurrency} ={" "}
          {formmatNumber(
            currencyRateMap
              ? (1 / +currencyRateMap[baseCalcCurrency]) *
                  +currencyRateMap[targetCalcCurrency]
              : 0
          )}
        </p>
        <p>date: {rateDate}</p>
      </div>
    </div>
  );
};

export default CalculatorPage;
