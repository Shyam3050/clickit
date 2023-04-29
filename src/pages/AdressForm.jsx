import { useState } from "react";
import { Loader, RadioInput } from "../component";
import DeliveryAdressForm from "../component/UI/DeliveryAdressForm";
import { motion } from "framer-motion";
import { stripeCheckOut } from "../utils/stripeCheckout";
import { useDispatch, useSelector } from "react-redux";
import { deliverhereLoaderState } from "../store";


const AdressForm = () => {
  const [newAdress, setNewAdress] = useState(false);
  const dispatch = useDispatch();
  const { deliverhereLoader } = useSelector((state) => state.user);

  function newAdressClose() {
    setNewAdress(false);
  }
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const deliverHear = () => {
    dispatch(deliverhereLoaderState());
    stripeCheckOut();
    dispatch(deliverhereLoaderState());
  };
  return (
    <div className="w-full min-h-screen pr-4">
      <div>
        <RadioInput
          id={"ssd"}
          value={
            " shyam sundar 9668221451 md street patrapur ganjam odisha pin: 761004"
          }
          onchangeselect={handleOptionChange}
        />
        <RadioInput
          id={"ssd2"}
          value={"gds2"}
          onchangeselect={handleOptionChange}
        />
        <RadioInput
          id={"ssd3"}
          value={"gds3"}
          onchangeselect={handleOptionChange}
        />
      </div>
      <motion.button
        className="p-3 w-auto bg-green-500 text-white text-lg font-bold hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={selectedValue ? false : true}
        onClick={deliverHear}
      >
       { deliverhereLoader ?  <Loader /> :  "Deliver Here"}
      </motion.button>
      <motion.p
        className="cursor-pointer block w-full text-left p-2 my-4 bg-orange-600 text-white text-lg hover:bg-orange-700 "
        onClick={() => setNewAdress(!newAdress)}
      >
        +ADD NEW ADRESS
      </motion.p>
      {newAdress && <DeliveryAdressForm onCancel={newAdressClose} />}
    </div>
  );
};

export default AdressForm;
