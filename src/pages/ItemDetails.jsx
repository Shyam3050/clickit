import React from "react";
import Delivery from "../img/delivery.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CategorySection, ClickitPromise } from "../component";
import { useParams } from "react-router-dom";
import { addtoCart } from "../store";


const ItemDetails = () => {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.user.foodItems);
  const param = useParams();
  const { productid } = param;
  const [item] = foodItems.filter(
    (item) => item.id === productid
  );
  const {  imageURL, price, title, unit, unitValue, category } = item;
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
        <div className="p-4 m-auto">
          <img src={imageURL} alt="" />
        </div>
        <div className="p-8 flex  items-start justify-start flex-col gap-4">
          <div className=" flex gap-2 items-center justify-center bg-orange-100 px-4 py-1 rounded-full">
            <p className="text-base text-orange-500 font-semibold ">
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
          <h1 className="text-xl mr-8 text-headingColor">{title}</h1>
          <p className="text-lighttextGray font-bold">
            {unitValue} {unit}
          </p>
          <p className=" text-lg text-headingColor font-bold">₹{price}</p>
          <motion.div
           whileTap={{scale: 0.75}}
            className=" w-full  md:w-8 h-9 px-10 text-white  rounded-lg  bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md hover:bg-red-600 "
            onClick={() => dispatch(addtoCart(item))}
          >
            add
          </motion.div>
          <ClickitPromise />
        </div>
      </section>
      <CategorySection title="Similar Products" category={category} />
      <CategorySection title="You might also like" category="snacks" />
    </>
  );
};

export default ItemDetails;
