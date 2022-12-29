import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import "./index.css"
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <UserProvider>
      <RouterProvider router={Router} />
    </UserProvider>
  </CartProvider>
);
