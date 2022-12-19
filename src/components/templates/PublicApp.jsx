import { Outlet } from "react-router-dom";
// import { TOKEN_NAME } from "../../constants/env";
import MainHeader from "../organisms/MainHeader";

const PublicApp = () => {
    // if (!localStorage.getItem(TOKEN_NAME)) return <Navigate to="/login" />
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
