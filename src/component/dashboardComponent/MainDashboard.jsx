import React from "react";
import {OrderList , ItemsList} from "../"

const MainDashboard = () => {
  return <div className="ml-40 mt-16 h-[calc(100vh-4rem)] overflow-y-scroll p-4">
    {/* <OrderList /> */}
    <ItemsList /> 

  </div>;
};

export default MainDashboard;
