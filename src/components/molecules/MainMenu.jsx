import { NavLink, useNavigate } from "react-router-dom";
import { deleteToken } from "../../helpers/auth";
import { TOKEN_NAME } from "../../constants/env";

const MainMenu = () => {
    const nav = useNavigate();

    return (
        <nav>
            <ul className="flex gap-4">
                <li><NavLink to="/" className="menu-item">Inicio</NavLink></li>
                <li><NavLink to="/productos" className="menu-item">Productos</NavLink></li>
                <li><NavLink to="/contactanos" className="menu-item">Contáctanos</NavLink></li>
                <li>
                    {
                        !localStorage.getItem(TOKEN_NAME) ? (
                            <NavLink
                                to="/login"
                                className="menu-item"
                            >
                                Iniciar sesión
                            </NavLink>
                        ) : (
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
                        )
                    }
                </li>
            </ul>
        </nav>
    )
};

export default MainMenu;
