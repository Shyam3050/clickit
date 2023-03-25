const AdressRadio = ({ adr, forOnChange }) => {
  const { fullName, mobileNumber, pincode, address, district, state, id } = adr;
  return (
    <div className="p-4 my-5 border-2" key={id}>
      <label className="flex gap-2 " htmlFor={id}>
        <div>
          <input
            type="radio"
            name="adress"
            id={id}
            onChange={(e) => forOnChange(e.target.id)}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <p className="font-semibold">
              {fullName} +91 {mobileNumber}
            </p>
          </div>
          <div className="text-sm text-gray-600">
            {address} {district} {state}
            <span className="text-black font-semibold"> -{pincode}</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default AdressRadio;
