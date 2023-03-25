import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { CartItem } from "./";
import { useDispatch } from "react-redux";
import { cartHide, clearCart } from "../store";
import { useSelector } from "react-redux";
import { login } from "../store/actions/login";
import EmptyCart from "../img/emptyCart.svg"
import { useNavigate } from "react-router-dom";


const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { cartItems } = useSelector((state) => state.cart);
  const { userDetails } = useSelector((state) => state.user);
  function hideCart() {
    dispatch(cartHide());
  }

  const sub_total_price = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 ">
        <div onClick={hideCart}>
          <motion.div whileTap={{ scale: 0.75 }}>
            <MdOutlineKeyboardBackspace className="text-textColor text-3xl cursor-pointer" />
          </motion.div>
        </div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={() => dispatch(clearCart())}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
          </div>
          {/* cart total section */}
          <div
            className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 
        "
          >
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">₹ {sub_total_price}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">₹ 20</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
              ₹ {sub_total_price + 20}
              </p>
            </div>
            {userDetails ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={()=> {
                  navigate("/addressform")
                  dispatch(cartHide())
                }}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={() => dispatch(login())}
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart
          } className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
