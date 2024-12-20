import { useCalcContext } from "../../contexts/CalcContext";
import CalcButton from "./CalcButton";
import {
  ArrowDownUp,
  ArrowLeft,
  Divide,
  Dot,
  Equal,
  Minus,
  Plus,
  X,
} from "lucide-react";

const Controller = () => {
  const { appendNumber, clear, remove, getResult, swapExchange } =
    useCalcContext();

  return (
    <div className="grid grid-cols-4 sm:gap-2 gap-1">
      <CalcButton action={clear} variant="other" Icon="C" />
      <CalcButton action={remove} variant="other" Icon={ArrowLeft} />
      <CalcButton action={swapExchange} variant="other" Icon={ArrowDownUp} />

      <CalcButton
        action={() => appendNumber("÷")}
        variant="operator"
        Icon={Divide}
      />

      <CalcButton action={() => appendNumber("7")} Icon="7" />
      <CalcButton action={() => appendNumber("8")} Icon="8" />
      <CalcButton action={() => appendNumber("9")} Icon="9" />

      <CalcButton
        action={() => appendNumber("x")}
        variant="operator"
        Icon={X}
      />

      <CalcButton action={() => appendNumber("4")} Icon="4" />
      <CalcButton action={() => appendNumber("5")} Icon="5" />
      <CalcButton action={() => appendNumber("6")} Icon="6" />

      <CalcButton
        action={() => appendNumber("-")}
        variant="operator"
        Icon={Minus}
      />

      <CalcButton action={() => appendNumber("1")} Icon="1" />
      <CalcButton action={() => appendNumber("2")} Icon="2" />
      <CalcButton action={() => appendNumber("3")} Icon="3" />

      <CalcButton
        action={() => appendNumber("+")}
        variant="operator"
        Icon={Plus}
      />

      <CalcButton
        action={() => appendNumber("0")}
        className="col-span-2"
        Icon="0"
      />

      <CalcButton action={() => appendNumber(".")} Icon={Dot} variant="other" />

      <CalcButton action={getResult} variant="operator" Icon={Equal} />
    </div>
  );
};

export default Controller;
