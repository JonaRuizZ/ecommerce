import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants/env";

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`${API_URL}/public/products/${params.id}`)
            .then(resp => {
                setProduct(resp.data.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])
    return (
        <div>
            <h2 className="text-3xl">Name: {product?.product_name}</h2>
            <p>{JSON.stringify(product)}</p>
            <button className="btn-form px-4 flex gap-2">
                Agregar al carrito
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -4 24 24" width="24" fill="currentColor">
                    <path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"></path>
                </svg>
            </button>
        </div>
    )
}

export default Product;
