import { useState } from "react";
import Input from "../components/common/Input";
import CurrencyImage from "../components/common/CurrencyImage";
import { useCurrencyContext } from "../contexts/CurrencyContext";
import ExchangeListCard from "../components/ExchangeList/ExchangeListCard";
import { Plus } from "lucide-react";
import Title from "../components/common/Title";
import Line from "../components/common/Line";

const ExchangeListPage = () => {
  const {
    baseCurrency,
    targetCurrencies,
    currencyRateMap,
    setCurrencyExchangeAction,
    openExchangePopup,
  } = useCurrencyContext();

  const [baseValue, setBaseValue] = useState("1");

  const addCurrency = () => {
    setCurrencyExchangeAction("addTarget");
    openExchangePopup();
  };

  const changeBase = () => {
    setCurrencyExchangeAction("changeBaseList");
    openExchangePopup();
  };

  return (
    <>
      <Title title="exchange list" />

      <div className="flex items-center gap-4">
        <div onClick={changeBase} className="group cursor-pointer">
          <CurrencyImage currencyCode={baseCurrency} size={28} />
          <span className="text-[12px] block text-center text-[--text-p] group-hover:underline">
            {baseCurrency}
          </span>
        </div>
        <Input
          value={baseValue}
          onChange={(e) => setBaseValue(e.target.value)}
          type="number"
        />
      </div>

      <Line className="mt-4 mb-8" />

      <div className="grid lg:grid-cols-2 gap-4">
        {currencyRateMap
          ? targetCurrencies.map((currency, i) => (
              <ExchangeListCard
                key={i}
                currencyVal={
                  +baseValue *
                  (1 / +currencyRateMap[baseCurrency]) *
                  +currencyRateMap[currency]
                }
                currencyCode={currency}
              />
            ))
          : ""}
        <div
          className="group h-[145.6px] rounded-md border border-[--border-p] hover:border-[--border-s] flex justify-center items-center cursor-pointer duration-150"
          onClick={addCurrency}
        >
          <div className="flex flex-col gap-1 items-center text-[--text-t] group-hover:text-[--text-q]">
            <Plus size={48} />
            <span>add currency</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeListPage;
