import {
  HomeContainer,
  MenuContainer,
  CartContainer,
  CategorySection,
} from "./";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { foodItems, showCart } = useSelector((state) => state.user);
  const fruitsList = foodItems.filter((item) => item.category === "fruits");
  const icecreamsList = foodItems.filter(
    (item) => item.category === "icecreams"
  );
  const softDrinksList = foodItems.filter((item) => item.category === "drinks");
  const curryList = foodItems.filter((item) => item.category === "curry");

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <CategorySection
        itemList={fruitsList}
        title="Our Fresh and healthy fruits"
      />
      <CategorySection itemList={curryList} title="today special currys" />
      <CategorySection itemList={softDrinksList} title="Cold Drinks & Juices" />
      <CategorySection itemList={icecreamsList} title="Summer special" />
      <MenuContainer />
      {showCart && <CartContainer />}
    </div>
  );
};

export default MainContainer;
