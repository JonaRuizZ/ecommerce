import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

const Table = () => {
    const { data, error, loading } = useFetch("public/products")
    if (loading) return <h1 className="text-center text-2xl">Cargando datos...</h1>
    if (error) return <h1 className="text-center text-2xl font-medium text-red-400">Ocurrió un error en la petición :c</h1>

    return (
        <>
            <h1 className="text-center text-2xl font-medium">Productos</h1>
            <Link to="/admin/productos/crear" className="btn-form">Agregar producto</Link>
            {
                // Validamos si hay productos con un operador ternario
                data.length === 0 ? (<h1>No existen productos</h1>) :
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Fecha creación</th>
                                <th>Editar</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.product_name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.create_at}</td>
                                        <td>
                                            <Link>Editar</Link>
                                        </td>
                                        <td>
                                            <Link>Eliminar</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </>
    )
};

export default Table;
