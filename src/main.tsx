import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/index.tsx";
import { CalcContextProvider } from "./contexts/CalcContext.tsx";
import CurrencyContextProvider from "./contexts/CurrencyContext.tsx";
import { SettingsContextProvider } from "./contexts/SettingsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CurrencyContextProvider>
      <CalcContextProvider>
        <SettingsContextProvider>
          <AppRouter />
        </SettingsContextProvider>
      </CalcContextProvider>
    </CurrencyContextProvider>
  </StrictMode>
);
