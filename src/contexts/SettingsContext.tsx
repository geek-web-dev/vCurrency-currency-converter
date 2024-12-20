import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { APP_NAME } from "../constants";

type SettingsContextProps = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};

export const SettingsContext = createContext({} as SettingsContextProps);

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDark, setIsDark] = useLocalStorage(`${APP_NAME}-theme`, false);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <SettingsContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
