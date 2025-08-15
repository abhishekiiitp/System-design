import { CreditCardPayment } from "./CreditCardPayment";
import { PaypalPayment } from "./PaypalPayment";
import { UPIPayment } from "./UPIPayment";

export const strategies = {
  credit: new CreditCardPayment(),
  paypal: new PaypalPayment(),
  upi: new UPIPayment(),
};
