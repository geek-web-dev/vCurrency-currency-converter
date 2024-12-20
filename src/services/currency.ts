import { currency_api } from "../api/currencyFreaks";

const API_KEY = import.meta.env.VITE_CURRENCY_FREAKS_API_KEY;

export const getCurrencySymbols = async () => {
  const {
    data: { currencySymbols },
  } = await currency_api.get(`currency-symbols`);
  return currencySymbols;
};

export const getCurrencyRateMap = async () => {
  console.log("call");
  return (await currency_api.get(`rates/latest?apikey=${API_KEY}`)).data;
};
