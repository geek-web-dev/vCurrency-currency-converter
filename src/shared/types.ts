export type CurrencySymbolsType = string[][];

export type CurrencyExchangeActionType =
  | "changeBase"
  | "changeTarget"
  | "changeBaseList"
  | "addTarget";

export type CurrencyRateMapType = { [key: string]: string };
