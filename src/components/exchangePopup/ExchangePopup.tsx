import { X } from "lucide-react";
import { useCurrencyContext } from "../../contexts/CurrencyContext";
import Input from "../common/Input";
import CurrencyOption from "./CurrencyOption";
import { useEffect, useState } from "react";

const ExchangePopup = () => {
  const { currencySymbols, closeExchangePopup } = useCurrencyContext();
  const [searchText, setSearchText] = useState("");
  const [currencySymbolsFilter, setCurrencySymbolsFilter] =
    useState(currencySymbols);

  useEffect(() => {
    const debounce = () => {
      if (searchText) {
        setCurrencySymbolsFilter(
          currencySymbols?.filter(
            (e) =>
              e[0].toLowerCase().includes(searchText.trim()) ||
              e[0].toUpperCase().includes(searchText.trim()) ||
              e[1].toLowerCase().includes(searchText.trim()) ||
              e[1].toUpperCase().includes(searchText.trim())
          ) ?? []
        );
      }
    };

    const time = setTimeout(() => {
      debounce();
    }, 300);

    return () => clearTimeout(time);
  }, [searchText]);

  return (
    <>
      <div
        className="fixed left-0 top-0 size-full bg-black/50 -z-1 z-50"
        onClick={closeExchangePopup}
      />

      <div
        className="bg-[--surface-t] hover:bg-[--surface-q] text-[--text-p] rounded-l-md p-2 fixed right-0 top-0 z-50 duration-150 cursor-pointer"
        onClick={closeExchangePopup}
      >
        <X />
      </div>

      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md bg-[--surface-s] w-[94%] h-[600px] overflow-y-auto z-50">
        <div className="sticky left-0 top-0 p-4 bg-inherit">
          <Input
            placeholder="currency name"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>

        <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 p-4">
          {currencySymbolsFilter
            ? currencySymbolsFilter.map((item, i) => (
                <CurrencyOption
                  key={i}
                  currencySymbol={item[0]}
                  currencyName={item[1]}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default ExchangePopup;
