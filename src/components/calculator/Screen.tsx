import { useCalcContext } from "../../contexts/CalcContext";
import { formmatNumber } from "../../libs/utils";
import Line from "../common/Line";
import ExchangeField from "./ExchangeField";

const Screen = () => {
  const {
    currOperand,
    prevOperand,
    exchangeTo,
    baseCalcCurrency,
    targetCalcCurrency,
  } = useCalcContext();

  const operator = prevOperand[prevOperand.length - 1];
  const leftOperand = prevOperand.slice(0, -1);

  return (
    <div className="p-4 border border-[--border-s] rounded-md bg-[--surface-p] overflow-x-auto">
      <div className="space-y-2">
        <div className="ml-auto min-h-8 w-fit text-2xl text-[--text-p]">
          {leftOperand ? formmatNumber(leftOperand) + (operator ?? "") : ""}
        </div>
        <ExchangeField
          currencyVal={currOperand}
          currencyCode={baseCalcCurrency}
        />
      </div>

      <Line className="my-4 w-full" />

      <ExchangeField
        currencyVal={exchangeTo}
        currencyCode={targetCalcCurrency}
        isBase={false}
      />
    </div>
  );
};

export default Screen;
