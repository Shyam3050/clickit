import React ,{useEffect} from "react";
import { CreateContainer, Header, MainContainer } from "./component";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "./store/actions/getFoodItems";

const App = () => {
const dispatch =   useDispatch()
  const user = useSelector((state) => state.user.userDetails);

  useEffect(() =>{
    dispatch(getFoodItems())
  },[dispatch])

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
