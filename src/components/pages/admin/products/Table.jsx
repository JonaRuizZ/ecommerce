import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../../../constants/env";
import { getToken } from "../../../../helpers/auth";
import { formatPrice } from "../../../../helpers/number";
import { formatText } from "../../../../helpers/text";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../atoms/Loader";

const Table = () => {
    const { data, error, loading } = useFetch("public/products")

    const deleteProduct = (product) => {
        if (window.confirm(`¿Estás seguro de querer ELIMINAR ${product.product_name}?`))
        axios.delete(`${API_URL}/admin/products/${product.id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(resp => {
            console.log(resp)
            alert("Producto eliminado")
        })
        .catch(err => {
            console.error(`Ha ocurrido un error: ${err}`)
        })
    };

    if (loading) return <Loader />
    if (error) return <h1 className="text-center text-2xl font-medium text-red-400">Ocurrió un error en la petición :c</h1>

    return (
        <div className="max-w-200 mx-auto">
            <h1 className="text-center text-2xl font-medium">Administración de los productos</h1>
            <div className="grid grid-cols-6 p-4 w-full">
                <Link to="/admin/productos/crear" className="btn-form text-center col-start-2">Agregar producto</Link>
            </div>
            {
                // Validamos si hay productos con un operador ternario
                data.length === 0 ? (<tr><td className="col-span-4">No existen productos actualmente</td></tr>) :
                <table className="w-2/3 mx-auto">
                    <thead>
                        <tr className="text-center h-14 bg-gray-300 border-2 border-black">
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            data.map(prod => (
                                <tr key={prod.id} className="border h-14 hover:bg-gray-100 duration-200">
                                    <td>{formatText(prod.product_name)}</td>
                                    <td>USD {formatPrice(prod.price)}</td>
                                    <td>
                                        <Link to={`/admin/productos/editar/${prod.id}`} className="btn-editar">Editar</Link>
                                    </td>
                                    <td>
                                        <Link className="btn-eliminar" onClick={() => deleteProduct(prod)}>Eliminar</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    )
};

export default Table;
