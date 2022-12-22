import { NavLink, useNavigate } from "react-router-dom";
import { deleteToken } from "../../helpers/auth";
import { TOKEN_NAME } from "../../constants/env";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const MainMenu = () => {
    const nav = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    return (
        <nav>
            <ul className="flex gap-4">
                <li><NavLink to="/" className="menu-item">Inicio</NavLink></li>
                <li><NavLink to="/productos" className="menu-item">Productos</NavLink></li>
                <li><NavLink to="/contactanos" className="menu-item">Contáctanos</NavLink></li>
                {
                    !localStorage.getItem(TOKEN_NAME) ? (
                        <li>
                            <NavLink
                                to="/login"
                                className="menu-item"
                            >
                                Iniciar sesión
                            </NavLink>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/admin/productos" className="menu-item">
                                    Administrar productos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        deleteToken()
                                        nav("/")
                                    }}
                                    to="/"
                                    className="menu-item"
                                >
                                    Cerrar sesión
                                </NavLink>
                            </li>
                        </>
                    )
                }
            </ul>
            { JSON.stringify(userData) }
        </nav >
    )
};

export default MainMenu;
