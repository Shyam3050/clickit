import React, { useEffect } from "react";
import {
  CreateContainer,
  Header,
  Loader,
  MainContainer,
  Error,
  CartContainer,
} from "./component";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "./store/actions/getFoodItems";
import ItemDetails from "./pages/ItemDetails";
import ScrollToTop from "./component/UI/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();
  const { foodItems, showCart } = useSelector((state) => state.user);

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
                <Route path="/createitem" element={<CreateContainer />} />
                <Route
                  path="/itemdetail/:productid"
                  element={<ItemDetails />}
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

        <div className="text-center p-2 text-white bg-orange-600">
          <p>copyright @click_it 2023 </p>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default App;
