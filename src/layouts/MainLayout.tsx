import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";
import { Sidebar } from "../components/sidebar/Sidebar";
import ExchangePopup from "../components/exchangePopup/ExchangePopup";
import { useCurrencyContext } from "../contexts/CurrencyContext";

const MainLayout = () => {
  const { isExchangePopupOpen } = useCurrencyContext();
  return (
    <div className="flex">
      <Sidebar />

      <Container className="my-8">
        <Outlet />
      </Container>

      {isExchangePopupOpen ? <ExchangePopup /> : null}
    </div>
  );
};

export default MainLayout;
