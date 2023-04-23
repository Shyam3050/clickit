import React, { useState } from "react";

const DeliveryAdressForm = ({ onCancel }) => {
  const [mnum, setmnum] = useState("");
  const [pin, setpin] = useState("");
  const [fname, setfname] = useState("");
  const [adress, setAdress] = useState("");

  function deliveyAdressFormHandler(e) {
    e.preventDefault();

    if (mnum.length !== 10) {
      alert("Enter Valid Nmber");
      return;
    } else if (pin.length !== 6) {
      alert("Enter valid pincode");
      return;
    }

    const adressData = {
      fullName: fname,
      mobileNum: mnum,
      fullAdress: adress,
      pinCode: pin
    }
    console.log(adressData)
  }

  return (
    <div className="">
      <form onSubmit={deliveyAdressFormHandler}>
        <div>
          <label htmlFor="full-name" class="block mb-2 text-base font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 "
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block mb-2 text-base font-medium">
            Mobile Num
          </label>
          <input
            type="number"
            id="mobile"
            className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 "
            value={mnum}
            onChange={(e) => setmnum(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="adress" className="block mb-2 text-base font-medium ">
            Full Adress
          </label>
          <textarea
            id="adress"
            rows="4"
            className="block p-2.5 w-full text-base rounded-lg border"
            placeholder="Write your Adress (street, village, district,state)..."
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="pin-code" class="block mb-2 text-base font-medium">
            Pin Code
          </label>
          <input
            type="number"
            id="pin-code"
            className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 "
            onChange={(e) => setpin(e.target.value)}
            value={pin}
            required
          />
        </div>
        <div className="flex gap-5 my-5 justify-end">
          <button
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded"
            type="button"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            className="bg-green-500  font-semibold text-white py-2 px-4 hover:bg-green-700 rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryAdressForm;
