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
                <li><NavLink to="/carrito" className="menu-item">Carrito</NavLink></li>
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
                            {
                                userData?.is_admin && (
                                    <>
                                        <li>
                                            <NavLink to="/admin/productos" className="menu-item">
                                                Administrar productos
                                            </NavLink>
                                        </li>
                                        <li>
                                            Administrador: { userData.details.fullname }
                                        </li>
                                    </>
                                )
                            }
                            <li>
                                <NavLink
                                    onClick={() => {
                                        deleteToken()
                                        setUserData()
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
        </nav >
    )
};

export default MainMenu;
