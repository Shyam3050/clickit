import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import NotFound from "../img/NotFound.svg";
import { addtoCart } from "../store";

const RowContainer = ({ flag, data,row_containerId }) => {
  const dispatch = useDispatch();

  return (
    <div
      id={row_containerId}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-hide "
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 px-10 text-white  rounded-lg  bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md hover:bg-red-600 -mt-8"
                onClick={() => dispatch(addtoCart(item))}
              >
               
                 add
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-8 z-30">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="not found" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
