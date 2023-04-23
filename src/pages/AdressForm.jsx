import { useState } from "react";
import { RadioInput } from "../component";
import DeliveryAdressForm from "../component/UI/DeliveryAdressForm";
import { motion } from "framer-motion";
import { stripeCheckOut } from "../utils/stripeCheckout";


const AdressForm = () => {

const [newAdress, setNewAdress]=  useState(false);

function newAdressClose (){
  setNewAdress(false)
}

  return (
    <div className="w-full min-h-screen pr-4">
        <RadioInput />
        <RadioInput />
        <RadioInput />
      <motion.button className="p-3 w-auto bg-green-500 text-white text-lg font-bold hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled onClick={() => stripeCheckOut}>
        Deliver Here
      </motion.button>
      <motion.p className="cursor-pointer block w-full text-left p-2 my-4 bg-orange-600 text-white text-lg hover:bg-orange-700 " onClick={() => setNewAdress(!newAdress)} >+ADD NEW ADRESS</motion.p>
      { newAdress && <DeliveryAdressForm onCancel = {newAdressClose} />}
    </div>
  );
};

export default AdressForm;
