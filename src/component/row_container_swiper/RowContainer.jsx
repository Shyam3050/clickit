import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import NotFound from "../../img/NotFound.svg";
import { addtoCart } from "../../store";
import { Link } from "react-router-dom";
import pansweet from "../../img/vb.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const RowContainer = ({ flag, data, row_containerId }) => {
  // const navigate = useNavigate();
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
          <Link
            key={item?.id}
            className="w-275 h-[300px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            onClick={(e) => console.log(e.target.dataset["item_id"])}
            to={`/itemdetail/${item.id}`}
          >
            <div className="w-full flex items-center justify-between ">
              
              <motion.div
                className="w-[243px] h-[200px] -mt-8 drop-shadow-2xl bg-slate-50  m-auto"
                whileHover={{ scale: 0.9 }}
              >
                <LazyLoadImage
                  src={pansweet}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className=" w-full  justify-between flex flex-row ">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 px-10 text-white  rounded-lg  bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md hover:bg-red-600 mt-14"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addtoCart(item));
                }}
                data-item_id={item.id}
              >
                add
              </motion.div>
              <div className=" flex flex-col items-end justify-end  mt-2 z-30">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <p className="text-sm">
                  {item.unitValue} {item.unit}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">₹</span>{" "}
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
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
