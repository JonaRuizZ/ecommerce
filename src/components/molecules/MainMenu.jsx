import { NavLink } from "react-router-dom";
import { deleteToken } from "../../helpers/auth";

const MainMenu = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                <li><NavLink to="/" className="menu-item">Inicio</NavLink></li>
                <li><NavLink to="/productos" className="menu-item">Productos</NavLink></li>
                <li><NavLink to="/contactanos" className="menu-item">Contáctanos</NavLink></li>
                <li><NavLink
                    onClick={deleteToken}
                    to="/login"
                    className="menu-item">
                    Cerrar sesión
                </NavLink></li>
            </ul>
        </nav>
    )
};

export default MainMenu;
