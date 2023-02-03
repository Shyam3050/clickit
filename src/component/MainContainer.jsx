import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HomeContainer, RowContainer, MenuContainer, CartContainer } from "./";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { foodItems, showCart } = useSelector((state) => state.user);

  function scrollBtn(direction) {
    const slider = document.getElementById("row_container");
    if (direction === "right") {
      slider.scrollLeft += 200;
    }
    if (direction === "left") {
      slider.scrollLeft -= 200;
    }
  }

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={scrollBtn.bind(this, "left")}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={scrollBtn.bind(this, "right")}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} data={foodItems} />
      </section>
      <MenuContainer />
      {showCart && <CartContainer />}
    </div>
  );
};

export default MainContainer;
