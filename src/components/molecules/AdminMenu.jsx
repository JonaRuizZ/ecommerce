import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                <li><NavLink to="/admin/productos" className="menu-item">Productos</NavLink></li>
                <li><NavLink to="/" className="menu-item">Volver a la app</NavLink></li>
            </ul>
        </nav>
    )
};

export default AdminMenu;
