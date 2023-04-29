const RadioInput = ({ id, value, onchangeselect }) => {
  return (
    <div className="border border-orange-500 p-2 my-4 flex">
      <input
        type="radio"
        name="size"
        value={value}
        id={id}
        className="mr-2"
        onChange={onchangeselect}
      />
      <label htmlFor={id} className="cursor-pointer p-2  w-full">
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
