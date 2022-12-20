import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products";
import PublicApp from "../components/templates/PublicApp";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AdminApp from "../components/templates/AdminApp";
import HomeAdmin from "../components/pages/admin/HomeAdmin";
import Form from "../components/pages/admin/products/Form";
import Table from "../components/pages/admin/products/Table";
import Sales from "../components/pages/admin/Sales";

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
    },
    {
        path: "/admin/ventas",
        element: <Sales />
    },
    {
        path: "/admin/productos",
        element: <Table />
    },
    {
        path: "/admin/productos/crear",
        element: <Form />
    },
    {
        path: "/admin/productos/editar/:id",
        element: <Form />
    }
]);

export default Router;