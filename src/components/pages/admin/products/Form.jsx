import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL, TOKEN_NAME } from "../../../../constants/env";
import { getToken } from "../../../../helpers/auth";
import Loader from "../../../atoms/Loader";

const Form = () => {
    const nav = useNavigate();
    const params = useParams();
    // console.log(params)
    const [productParams, setProductParams] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (params.id) {
            setLoading(true)
            axios.get(`${API_URL}/public/products/${params.id}`)
                .then(resp => {
                    setProductParams(resp.data.data)
                })
                .catch(err => {
                    setError(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // Data contiene todo lo que escribamos en los input del formulario
        const data = {
            product_name: e.target.productName.value,
            price: Number(e.target.price.value),
            images: [e.target.urlImage.value],
            description: e.target.description.value,
            features: {
                details: {
                    color: e.target.color.value
                }
            }
        };

        if (!params.id) {
            axios.post(`${API_URL}/admin/products`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(TOKEN_NAME)}`
                }
            })
                .then(resp => {
                    console.log(resp)
                    alert("El producto se ha creado exitosamente")
                    nav("/admin/productos")
                })
                .catch(err => {
                    setError(err)
                })
        } else {
            axios.put(`${API_URL}/admin/products/${params.id}`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(TOKEN_NAME)}`
                }
            })
                .then(resp => {
                    alert("El producto se ha actualizado exitosamente")
                    nav("/admin/productos")
                })
                .catch(err => {
                    setError(err)
                })
        }
    }

    if (loading) return <Loader />
    if (error) return <h1 className="text-center text-2xl font-medium text-red-400">{error?.message}</h1>

    return (
        <div className="flex flex-col justify-center items-center max-w-200 mx-auto">
            <h1 className="text-center text-2xl p-2">{`${params.id ? "Editar" : "Crear"}`} producto</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-2/5">
                <label htmlFor="productName">Nombre</label>
                <input className="input-item" type="text" name="productName" placeholder="Nombre del producto" defaultValue={productParams.product_name} required />
                <label htmlFor="price">Precio</label>
                <input className="input-item" type="number" name="price" placeholder="Precio del producto" defaultValue={productParams.price} required />
                <label htmlFor="urlImage">URL imágen</label>
                <input className="input-item" type="url" name="urlImage" placeholder="URL imágen del producto" defaultValue={productParams.images} required />
                <label htmlFor="color">Color</label>
                <input className="input-item" type="text" name="color" placeholder="Color del producto" defaultValue={productParams.features?.color || productParams.features?.details?.color} required />
                <label htmlFor="description">Descripción</label>
                <textarea className="input-item" name="description" rows="5" placeholder="Descripción del producto" defaultValue={productParams.description} required />
                <button className="btn-form" type="submit">{params.id ? "Actualizar" : "Crear"} producto</button>
                <p>{error && JSON.stringify(error)}</p>
            </form>
        </div>
    )
};

export default Form;
