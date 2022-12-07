import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";

const PublicApp = () => {
    return (
        <>
            <MainHeader />
            <div className="outlet-item">
                <Outlet />
            </div>
        </>
    )
};

export default PublicApp;
