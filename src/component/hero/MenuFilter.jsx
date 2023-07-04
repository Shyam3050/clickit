import React, { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../utils/data";
import { useSelector } from "react-redux";
import RowContainer from "../row_container_swiper/RowContainer";
// import { IoFastFood } from "react-icons/io5";
import idly from "../../img/idly.png"
const MenuFilter = () => {
  const [filter, setFilter] = useState("chicken");
  const foodItems = useSelector((state) => state.user.foodItems);

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-hide">
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setFilter(category.urlParamName)}
              >
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className={`group ${
                    filter === category.urlParamName
                      ? "bg-cartNumBg"
                      : "bg-card"
                  } w-40 min-w-[94px] h-44 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                >
                  <div
                    className={`w-28 h-28 rounded-full shadow-lg ${
                      filter === category.urlParamName
                        ? "bg-white"
                        : "bg-cartNumBg"
                    } group-hover:bg-white flex items-center justify-center overflow-hidden`}
                  >
                    {/* <IoFastFood
                      className={`${
                        filter === category.urlParamName
                          ? "text-textColor"
                          : "text-white"
                      } group-hover:text-textColor  text-lg`}
                    /> */}
                    <img src={idly} alt="" srcset="" className="" />
                  </div>
                  <p
                    className={`text-lg font-bold ${
                      filter === category.urlParamName
                        ? "text-white"
                        : "text-textColor"
                    } group-hover:text-white`}
                  >
                    {category.name}
                  </p>
                </motion.div>
              </div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuFilter;
