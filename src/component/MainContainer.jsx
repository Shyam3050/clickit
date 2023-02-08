import {
  HomeContainer,
  MenuContainer,
  CartContainer,
  CategorySection,
  Loader
} from "./";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { foodItems } = useSelector((state) => state.user);
  
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      {foodItems && foodItems.length > 0 ? (
        <>
          <CategorySection
            itemList={foodItems}
            title="Our Fresh and healthy fruits"
            category="fruits"
          />
          <CategorySection
            itemList={foodItems}
            title="today special currys"
            category="icecreams"
          />
          <CategorySection
            itemList={foodItems}
            title="Cold Drinks & Juices"
            category="drinks"
          />
          <CategorySection
            itemList={foodItems}
            title="Summer special"
            category="curry"
          />
        </>
      ) : (
        <Loader />
      )}
      <MenuContainer />
      
      
    </div>
  );
};

export default MainContainer;
