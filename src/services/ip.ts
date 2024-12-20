import { ip_api } from "../api/ipapi";

export const getTargetCurrencyCode = async () => {
  try {
    const { data } = await ip_api.get("");
    return data.currency;
  } catch (err: unknown) {
    console.log(err);
    return "EGP";
  }
};
