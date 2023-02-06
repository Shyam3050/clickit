import React, { useState } from "react";
import logo from "../img/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/login";
import { useSelector } from "react-redux";
import { logout, cartShow } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const {cartQty} = useSelector(state => state.cart)
  const [isMenu, setMenu] = useState(false);

  const loginHandler = async () => {
    if (!userDetails) {
      dispatch(login());
    } else {
      setMenu(!isMenu);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    setMenu(false);
  };

  function showCart (){
    dispatch(cartShow())
  }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:px-16 md:p-6 bg-primary">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="ptrfoodzone_logo" />
          <p className="text-headingColor text-xl font-bold"> city</p>
        </Link>
        <div className="flex gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>
          <div className=" relative flex items-center " onClick={showCart}>
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2  -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="font-semibold text-xs text-white ">{cartQty}</p>
            </div>
          </div>
          <div
            className=" relative bg-gray-200 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full drop-shadow-xl "
            onClick={loginHandler}
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={userDetails ? userDetails.photoURL : Avatar}
              alt="user"
              className="w-full h-full object-cover cursor-pointer rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg overflow-hidden flex flex-col absolute right-0 top-12 "
              >
                {userDetails.email === "nimmanashyam3050@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="flex items-center gap-3 px-4 py-2  hover:bg-slate-100 text-textColor text-base transition-all ease-in-out duration-100 cursor-pointer">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="flex items-center gap-3 px-4 py-2  hover:bg-slate-100 text-textColor text-base transition-all ease-in-out duration-100 cursor-pointer"
                  onClick={logoutHandler}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden  w-full h-full">
        <div className=" relative flex items-center " onClick={showCart}>
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute -top-2  -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="font-semibold text-xs text-white ">{cartQty}</p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="ptrfoodzone_logo" />
          <p className="text-headingColor text-xl font-bold"> city</p>
        </Link>
        <div
          className=" relative bg-gray-200 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full drop-shadow-xl "
          onClick={loginHandler}
        >
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={userDetails ? userDetails.photoURL : Avatar}
            alt="user"
            className="w-full h-full object-cover cursor-pointer rounded-full"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg overflow-hidden flex flex-col absolute right-0 top-12 "
            >
              {userDetails.email === "nimmanashyam3050@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="flex items-center gap-3 px-4 py-2  hover:bg-gray-200 text-textColor text-base transition-all ease-in-out duration-100 cursor-pointer">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col ">
                <li className="px-4 py-2 text-base text-textColor hover:bg-gray-200 duration-100 transition-all ease-in-out cursor-pointer">
                  Menu
                </li>
                <li className="px-4 py-2 text-base text-textColor hover:bg-gray-200 duration-100 transition-all ease-in-out cursor-pointer">
                  Home
                </li>
                <li className="px-4 py-2 text-base text-textColor hover:bg-gray-200 duration-100 transition-all ease-in-out cursor-pointer">
                  About Us
                </li>
                <li className="px-4 py-2 text-base text-textColor hover:bg-gray-200 duration-100 transition-all ease-in-out cursor-pointer">
                  Service
                </li>
              </ul>
              <p
                className=" m-2 flex items-center justify-center gap-3 px-4 py-2 bg-gray-200  hover:bg-gray-300 text-textColor text-base transition-all ease-in-out duration-100 cursor-pointer"
                onClick={logoutHandler}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
