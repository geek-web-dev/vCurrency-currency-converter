import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CurrencyExchangeActionType,
  CurrencyRateMapType,
  CurrencySymbolsType,
} from "../shared/types";
import { getCurrencyRateMap, getCurrencySymbols } from "../services/currency";
import { getTargetCurrencyCode } from "../services/ip";
import useLocalStorage from "../hooks/useLocalStorage";
import { APP_NAME } from "../constants";

type CurrencyContextProps = {
  currencySymbols: CurrencySymbolsType | null;
  currencyRateMap: CurrencyRateMapType | null;
  setCurrencySymbols: Dispatch<SetStateAction<CurrencySymbolsType | null>>;
  rateDate: string;

  baseCurrency: string;
  setBaseCurrency: Dispatch<SetStateAction<string>>;
  targetCurrencies: string[];
  setTargetCurrencies: Dispatch<SetStateAction<string[]>>;

  defaultTargetCurrency: string;

  isExchangePopupOpen: boolean;
  openExchangePopup: () => void;
  closeExchangePopup: () => void;
  currencyExchangeAction: CurrencyExchangeActionType;
  setCurrencyExchangeAction: Dispatch<
    SetStateAction<CurrencyExchangeActionType>
  >;
};

export const CurrencyContext = createContext({} as CurrencyContextProps);

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [defaultTargetCurrency, setDefaultTargetCurrency] = useState("EGP");

  const [currencySymbols, setCurrencySymbols] =
    useState<CurrencySymbolsType | null>(null);

  const [currencyRateMap, setCurrencyRateMap] =
    useState<CurrencyRateMapType | null>(null);

  const [isExchangePopupOpen, setIsExchangePopupOpen] = useState(false);

  const [rateDate, setCurrencyRateDate] = useState("");

  const [currencyExchangeAction, setCurrencyExchangeAction] =
    useState<CurrencyExchangeActionType>("changeBase");

  const [baseCurrency, setBaseCurrency] = useState("USD");

  const [targetCurrencies, setTargetCurrencies] = useLocalStorage(
    `${APP_NAME}-target-currencies`,
    [""]
  );

  const openExchangePopup = () => setIsExchangePopupOpen(true);
  const closeExchangePopup = () => setIsExchangePopupOpen(false);

  const _setCurrencySymbols = async () => {
    setCurrencySymbols(Object.entries(await getCurrencySymbols()));
  };

  const _setDefaultTargetCurrency = async () => {
    setDefaultTargetCurrency(await getTargetCurrencyCode());
  };

  const _setCurrencyRateMap = async () => {
    const { date, rates } = await getCurrencyRateMap();
    setCurrencyRateMap(rates);
    setCurrencyRateDate(date);
  };

  useEffect(() => {
    _setDefaultTargetCurrency();
    _setCurrencyRateMap();
    _setCurrencySymbols();
  }, []);

  useEffect(() => {
    const currencies = localStorage.getItem(`${APP_NAME}-target-currencies`);
    if (currencies && currencies.includes(defaultTargetCurrency)) {
      return;
    }

    if (targetCurrencies.includes("")) {
      setTargetCurrencies([defaultTargetCurrency]);
    } else {
      setTargetCurrencies((p) => [defaultTargetCurrency, ...p]);
    }
  }, [defaultTargetCurrency]);

  return (
    <CurrencyContext.Provider
      value={{
        currencySymbols,
        setCurrencySymbols,
        currencyRateMap,
        rateDate,

        baseCurrency,
        setBaseCurrency,
        targetCurrencies,
        setTargetCurrencies,

        defaultTargetCurrency,

        isExchangePopupOpen,
        openExchangePopup,
        closeExchangePopup,

        currencyExchangeAction,
        setCurrencyExchangeAction,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
