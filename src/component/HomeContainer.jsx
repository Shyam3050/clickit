import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex flex-1 flex-col items-start  justify-center gap-6">
        <div className="flex gap-2 items-center justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor md:text-[4.25rem]">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quo
          aperiam excepturi ullam aut magnam omnis cupiditate eum, beatae
          voluptatum.
        </p>
        <button className="bg-gradient-to-br text-white from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>
      <div className="py-2 flex items-center flex-1 relative">
        <img
          src={HeroBg}
          className="h-420 w-full lg:w-auto lg:h-650 ml-auto"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center gap-4 flex-wrap lg:px-32 py-4 overflow-hidden">
          {heroData &&
            heroData.map((item) => (
              <div key={item.id} className=" lg:w-150   bg-cardOverlay p-4 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
                <img
                  src={item.imageSrc}
                  className=" w-20 -mt-5 lg:w-40 lg:-mt-20 "
                  alt="i1"
                />
                <p className=" text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4">
                  {item.name}
                </p>
                <p className="text-[12px] lg:text-[14px] font-semibold text-lighttextGray ">
                  {item.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor ">
                  <span className="text-xs text-red-600">$</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
