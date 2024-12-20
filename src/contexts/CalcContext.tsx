import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { calcNumberHandler, isOperator } from "../libs/utils";
import { MAX_NUMBER_CALC_LEN } from "../constants";
import { useCurrencyContext } from "./CurrencyContext";

type CalcContextProps = {
  currOperand: string;
  prevOperand: string;
  exchangeTo: string;
  appendNumber: (num: string) => void;
  clear: () => void;
  remove: () => void;
  getResult: () => void;
  swapExchange: () => void;
  baseCalcCurrency: string;
  setBaseCalcCurrency: Dispatch<SetStateAction<string>>;
  targetCalcCurrency: string;
  setTargetCalcCurrency: Dispatch<SetStateAction<string>>;
};

export const CalcContext = createContext({} as CalcContextProps);

export const useCalcContext = () => useContext(CalcContext);

export const CalcContextProvider = ({ children }: { children: ReactNode }) => {
  const { currencyRateMap, defaultTargetCurrency } = useCurrencyContext();

  const [currOperand, setCurrOperand] = useState("0");
  const [prevOperand, setPrevOperand] = useState("");
  const [exchangeTo, setExchangeTo] = useState("0");

  const [baseCalcCurrency, setBaseCalcCurrency] = useState("USD");
  const [targetCalcCurrency, setTargetCalcCurrency] = useState("");

  useEffect(() => {
    setTargetCalcCurrency(defaultTargetCurrency);
  }, [defaultTargetCurrency]);

  useEffect(() => {
    if (currencyRateMap) {
      setExchangeTo(
        calcNumberHandler(
          +currOperand *
            (1 / +currencyRateMap[baseCalcCurrency]) *
            +currencyRateMap[targetCalcCurrency]
        )
      );
    }
  }, [currOperand, baseCalcCurrency, targetCalcCurrency]);

  const appendNumber = (num: string) => {
    if (
      currOperand.length === MAX_NUMBER_CALC_LEN ||
      exchangeTo.length === MAX_NUMBER_CALC_LEN
    ) {
      return;
    }

    // operator
    if (isOperator(num)) {
      setPrevOperand(compute() + num);
      setCurrOperand("0");
      return;
    }

    if (num === "." && currOperand.includes(".")) return;

    if (num === "0" && currOperand === "0") return;

    if (currOperand === "0" && num !== ".") {
      setCurrOperand(num);
      return;
    }

    setCurrOperand((p) => p + num);
  };

  const clear = () => {
    setCurrOperand("0");
    setPrevOperand("");
    setExchangeTo("0");
  };

  const getResult = () => {
    setCurrOperand(calcNumberHandler(+compute()));
    setPrevOperand("");
  };

  const remove = () => {
    if (currOperand.length === 1) {
      return setCurrOperand("0");
    }
    setCurrOperand(currOperand.slice(0, -1));
  };

  const swapExchange = () => {
    const base = baseCalcCurrency;
    setTargetCalcCurrency(base);
    setBaseCalcCurrency(targetCalcCurrency);
  };

  const compute = () => {
    if (prevOperand === "") return currOperand;

    const oper = prevOperand[prevOperand.length - 1];

    const firstOperand = +prevOperand.slice(0, -1);
    const secondOperand = +currOperand;

    let res = 0;

    switch (oper) {
      case "+":
        res = firstOperand + secondOperand;
        break;

      case "-":
        res = firstOperand - secondOperand;
        break;

      case "÷":
        res = firstOperand / secondOperand;
        break;

      case "x":
        res = firstOperand * secondOperand;
        break;
    }

    return res;
  };

  return (
    <CalcContext.Provider
      value={{
        currOperand,
        prevOperand,
        exchangeTo,
        appendNumber,
        clear,
        remove,
        getResult,
        swapExchange,
        baseCalcCurrency,
        setBaseCalcCurrency,
        targetCalcCurrency,
        setTargetCalcCurrency,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
