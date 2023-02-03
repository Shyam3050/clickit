import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../store";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  console.log(cartItem);
  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={cartItem.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt={cartItem.title}
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{cartItem.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {cartItem.price}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(removeFromCart(cartItem))}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {cartItem.qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(addtoCart(cartItem))}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
