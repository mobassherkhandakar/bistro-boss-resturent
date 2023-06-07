import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import ChekaOutForm from "./ChekOutForm";
import useCards from "../../../Hook/useCards";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)
const Payment = () => {
  const [,card] = useCards();
  const total = card.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))
  console.log(typeof price);
  return (
    <div className="mx-auto w-full mt-28">
      <h2 className="text-3xl mb-5 font-bold">Payment</h2>
      <Elements stripe={stripePromise}>
        <ChekaOutForm cart={card} price={price}/>
      </Elements>
    </div>
  );
};

export default Payment;
