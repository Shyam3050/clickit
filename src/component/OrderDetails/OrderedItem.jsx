import React from "react";
import Monster from "../../img/PANNER.avif";

const OrderedItem = () => {
  return (
    <div className="border border-gray-300 p-1 mb-4">
      <div className="flex gap-10 items-center justify-between mb-2">
        <p className="text-xs">
          order Id: <span className="text-sm"> #2323Sglk&423kki</span>
        </p>
        <div className="flex items-center cursor-pointer">
          <p className="font-bold"> Total: $46</p>
          <p className="text-xs p-1 mx-2 font-bold border border-green-500 rounded-lg text-green-600">
            processing
          </p>
        </div>
      </div>
      <div className="flex gap-10 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 object-cover p-1">
            <img
              src={Monster}
              alt=""
              className="w-full h-full
                    "
            />
          </div>
          <div>
            <p className="font-medium">Monster</p>
            <div className="flex gap-4">
              <p className="text-sm font-semibold">Qty: 2</p>
              <p className="font-bold">$23</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm">Shyam sundar</p>
          <p className="max-w-xs text-xs">
            md street, patrapur, 9668221451, pin: 761004, ganjam, odisha
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
