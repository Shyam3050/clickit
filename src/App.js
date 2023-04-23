import React, { useEffect } from "react";
import {
  Footer,
  Header,
  Loader,
  MainContainer,
  Error,
  CartContainer,
} from "./component";
import { Orders, ItemDetails, Login, AdressForm } from "./pages";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "./store/actions/getFoodItems";
import ScrollToTop from "./component/UI/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();
  const { foodItems, showCart, userDetails } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          {foodItems ? (
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route
                  path="/itemdetail/:productid"
                  element={<ItemDetails />}
                />
                <Route
                  path="/login"
                  element={
                    !userDetails ? <Login /> : <Navigate replace to={"/"} />
                  }
                />
                <Route
                  path="/orders"
                  element={
                    userDetails ? (
                      <Orders />
                    ) : (
                      <Navigate replace to={"/login"} />
                    )
                  }
                />
                <Route
                  path="/adressform"
                  element={
                    userDetails ? (
                      <AdressForm />
                    ) : (
                      <Navigate replace to={"/login"} />
                    )
                  }
                />
                <Route path="*" element={<Error />} />
              </Routes>
            </ScrollToTop>
          ) : (
            <div className="w-full h-screen flex justify-center items-center">
              <Loader />
            </div>
          )}
          {showCart && <CartContainer />}
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
