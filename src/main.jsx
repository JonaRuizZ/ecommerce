import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import "./index.css"
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={Router} />
  </UserProvider>
);
