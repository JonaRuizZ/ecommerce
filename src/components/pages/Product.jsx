import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../helpers/number";
import useFetch from "../../hooks/useFetch";
import Loader from "../atoms/Loader";

const Product = () => {
    const params = useParams();
    const { data, loading, error } = useFetch(`public/products/${params.id}`)
    const { state, dispatch } = useContext(CartContext)

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: data
        });
    };

    const removeFromCart = () => {
        // ¿Problemas para eliminar o hacer cualquier acción? hacer lo siguientee:
        // console.log(data)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: data
        });
    };

    if (loading) return <Loader />
    if (error) return <h1 className="text-center text-2xl font-medium text-red-400">Ocurrió un error en la petición :c</h1>

    return (
        <div className="grid grid-cols-2">
            <div className="m-4 flex justify-end items-center">
                <img src={data.images} alt="Imagen producto" className="w-3/4 rounded-lg" />

            </div>
            <div className="m-4 flex flex-col items-center justify-center">
                <h2 className="text-3xl m-4">{data?.product_name}</h2>
                <p className="text-center">{data?.description}</p>
                <p>{data?.features?.details?.color}</p>
                <h3>Precio: {formatPrice(data?.price)}</h3>
                <div className="grid grid-cols-2 gap-4 m-4">
                    <button
                        onClick={addToCart}
                        className="btn-buyCart">
                        Agregar al carrito
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -4 24 24" width="24" fill="currentColor">
                            <path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"></path>
                        </svg>
                    </button>
                    <button
                        onClick={removeFromCart}
                        className="btn-deleteCart">
                        Quitar del carrito
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor">
                            <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path><path d="M11.414 10l2.829 2.828a1 1 0 0 1-1.415 1.415L10 11.414l-2.828 2.829a1 1 0 1 1-1.415-1.415L8.586 10 5.757 7.172a1 1 0 0 1 1.415-1.415L10 8.586l2.828-2.829a1 1 0 0 1 1.415 1.415L11.414 10z"></path>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Product;
