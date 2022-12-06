import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Error404 from "../components/pages/Error404"

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Home />,
        errorElement:<Error404 />
    }
]);

export default Router;