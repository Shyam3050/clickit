import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {Loader} from "../";
import { generateString } from "../../utils/generateRandomString";
import { updateUserAdress } from "../../utils/firebaseFunctions";
const NewAdressForm = ({ adressUpdate }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("-------");
  const [state, setState] = useState("-----");
  const [loader, setLoader] = useState(false);
  const { uid } = useSelector((state) => state.user.userDetails);

  function formSubmitHandler(e) {
    e.preventDefault();
    setLoader(true);
    if (mobileNumber.length !== 10) {
      alert("Enter valid mobile number");
      setLoader(false);
      return;
    }
    const newAdress = {
      fullName,
      mobileNumber,
      pincode,
      address,
      district,
      state,
      id: generateString(4),
    };
    updateUserAdress(uid, newAdress);
    setLoader(false);
    setFullName("");
    setMobileNumber("");
    setPinCode("");
    setAddress("");
    setDistrict("");
    setState("");
    setTimeout(() => {
      adressUpdate();
    }, 1000);
  }
  function pinCodeValidator(value) {
    setPinCode(value);
    if (value.length === 6) {
      fetch(`https://api.postalpincode.in/pincode/${value}`)
        .then((res) => res.json())
        .then((data) => {
          const { State, District } = data[0].PostOffice[0];
          setDistrict(District);
          setState(State);
        });
    }
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="relative z-0 w-full m-6 group ">
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label
          htmlFor="fullName"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full Name
        </label>
      </div>
      <div className="relative z-0 w-full m-6 group ">
        <input
          type="number"
          name="mobileNumber"
          id="mobileNumber"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          maxLength="10"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <label
          htmlFor="mobileNumber"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mobile Number
        </label>
      </div>
      <div className="relative z-0 w-full m-6 group ">
        <input
          type="text"
          name="pinCode"
          id="pinCode"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          maxLength="6"
          value={pincode}
          onChange={(e) => pinCodeValidator(e.target.value)}
          required
        />
        <label
          htmlFor="pinCode"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Pincode
        </label>
      </div>
      <div className="relative z-0 w-full m-6 group ">
        <input
          type="text"
          name="fullAddress"
          id="fullAddress"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label
          htmlFor="fullAddress"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address (Village, city, Area & Street)
        </label>
      </div>
      <div className="relative z-0 w-full m-6 group ">
        City: <span>{district}</span>
      </div>
      <div className="relative z-0 w-full m-6 group ">
        State: <span>{state}</span>
      </div>
      <button
        type="submit"
        className="bg-orange-600 text-white
       py-2 px-4 "
      >
        {loader ? <Loader /> : "Submit"}
      </button>
    </form>
  );
};

export default NewAdressForm;
