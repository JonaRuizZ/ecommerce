import { Outlet } from "react-router-dom";
import MainMenu from "../molecules/MainMenu";
// import { TOKEN_NAME } from "../../constants/env";
import MainHeader from "../organisms/MainHeader";

const PublicApp = () => {
    // if (!localStorage.getItem(TOKEN_NAME)) return <Navigate to="/login" />
    return (
        <>
            <MainHeader>
                <MainMenu />
            </MainHeader>
            <div className="outlet-item">
                <Outlet />
            </div>
        </>
    )
};

export default PublicApp;
