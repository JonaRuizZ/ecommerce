import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";

const PublicApp = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
};

export default PublicApp;
