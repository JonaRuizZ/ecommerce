import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products";
import PublicApp from "../components/templates/PublicApp";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <PublicApp />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/productos",
                element: <Products />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);

export default Router;