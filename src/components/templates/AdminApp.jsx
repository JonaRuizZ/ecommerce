import { Outlet } from "react-router-dom";
import AdminMenu from "../molecules/AdminMenu";
import MainHeader from "../organisms/MainHeader";

const AdminApp = () => {
  return (
    <>
      <MainHeader>
        <AdminMenu />
      </MainHeader>
      <div className="outlet-item">
        <Outlet />
      </div>
    </>
  )
};

export default AdminApp;
