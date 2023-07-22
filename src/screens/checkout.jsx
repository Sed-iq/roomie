import { useState } from "react";
import { FaExclamationTriangle, FaSpinner } from "react-icons/fa";

export default () => {
  const email = localStorage.getItem("email");
  const amount = localStorage.getItem("total");
  const [failed, setFailed] = useState(false);
  if (email == null || amount == null || failed == true) {
    return (
      <div
        id="checkout_modal"
        className="flex  h-full flex-col justify-center items-center w-full"
      >
        <FaExclamationTriangle className="sm:text-xl text-red-600" />
        <div className="text-sm opensans-b mt-3 text-gray-700">
          Error Processing Payment.
        </div>
      </div>
    );
  } else {
    payer(email, amount, setFailed);

    return (
      <div
        id="checkout_modal"
        className="flex h-full flex-col justify-center items-center w-full"
      >
        <FaSpinner className="animate-spin" />
        <div className="text-sm mt-3 text-gray-700">Processing Payment...</div>
      </div>
    );
  }
};
function payer(email, amount, setFailed) {
  const p = PAY(email, amount);
  if (p == false) setFailed(true);
}
