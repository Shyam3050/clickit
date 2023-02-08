import React from "react";

const ClickitPromise = () => {
  return (
    <div
      className="flex flex-col justify-start items-start font-semibold gap-4
        "
    >
      Why shop from clickit?
      <div className="flex gap-4 justify-center items-center">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
          alt=""
          className="w-14 h-14"
        />
        <div>
          <p className="text-xs text-lighttextGray">Superfast Delivery</p>
          <p className="text-xs text-lighttextGray">
            Get your order delivered to your doorstep at the earliest from dark
            stores near you.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
          alt=""
          className="w-14 h-14"
        />
        <div>
          <p className="text-xs text-lighttextGray">Best Prices & Offers</p>
          <p className="text-xs text-lighttextGray">
            Best price destination with offers directly from the manufacturers.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
          alt=""
          className="w-14 h-14"
        />
        <div>
          <p className="text-xs text-lighttextGray">Wide Assortment</p>
          <p className="text-xs text-lighttextGray">
            Choose from 5000+ products across food, personal care, household &
            other categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClickitPromise;
