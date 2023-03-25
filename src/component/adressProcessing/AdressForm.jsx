import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AdressRadio, NewAdressForm } from "../";
import { getAllAddress } from "../../utils/firebaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addDeliveryAddressId } from "../../store";
import { useNavigate } from "react-router-dom";


const AdressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [_newAdressform, setNewAdressForm] = useState(false);
  const [deliveryHear, setDeliveryHere] = useState("");
  const [deliveryAddress, setDeliveyAddress] = useState("");
  const [updatedeliveryAddress, setUpdateDeliveryAddress] = useState(false);
  const { uid } = useSelector((state) => state.user.userDetails);


  useEffect(() => {
    getAllAddress(uid).then((res) => setDeliveyAddress(res));
  }, [updatedeliveryAddress, uid]);

  function submitAdress() {
    if (!deliveryHear) {
      alert("select the adress or Add new Adress");
      return;
    }
    dispatch(addDeliveryAddressId(deliveryHear))
    navigate("/ordersummary")
  }

  function selectDeliverHere(id) {
    setDeliveryHere(id);
  }

  function newAddressUpdateStatus() {
    setNewAdressForm(false);
    setUpdateDeliveryAddress(!updatedeliveryAddress);
  }
  return (
    <div className="w-full min-h-screen">
      <div className="p-4 pl-11 bg-orange-400 text-white text-lg font-bold">
        DELIVERY ADDRESS
      </div>
      <div>
        {deliveryAddress &&
          deliveryAddress.address.map((adr) => (
            <AdressRadio adr={adr} forOnChange={selectDeliverHere} key = {adr.id}/>
          ))}

        <motion.button
          whileTap={{ scale: 0.85 }}
          className="bg-green-600 text-white text-lg  py-2 px-4 "
          onClick={submitAdress}
        >
          DELIVERY HERE
        </motion.button>
      </div>
      <button
        className="p-2 w-full text-left bg-orange-200 text-orange-600 text-base font-bold mt-3"
        onClick={() => setNewAdressForm(!_newAdressform)}
      >
        + NEW ADDRESS
      </button>

      {_newAdressform && (
        <NewAdressForm adressUpdate={newAddressUpdateStatus} />
      )}
    </div>
  );
};

export default AdressForm;
