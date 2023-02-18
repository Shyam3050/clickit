import React from "react";
import { AdminSidebar, AdminHeader,MainDashboard } from "../component";

const DashBoard = () => {
  return (
    <div className="relative">
      <AdminSidebar />
      <AdminHeader/>
      <MainDashboard /> 
    </div>
  );
};

export default DashBoard;
