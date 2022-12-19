import axios from "axios";
import { API_URL } from "../../../../constants/env";
import { getToken } from "../../../../helpers/auth";

const Form = () => {
    const handleSubmit = e => {
        e.preventDefault();
        // Data contiene todo lo que escribamos en los input del formulario
        const data = {
            product_name: e.target.productName.value,
            price: Number(e.target.price.value),
            images: [e.target.urlImage.value],
            description: e.target.description.value,
            features: {
                color: e.target.color.value
            }
        };

        axios.post(`${API_URL}/admin/products`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
            .then(resp => {
                console.log(resp)
                alert("El producto se ha creado exitosamente")
            })
            .catch(err => {
                console.error(`Ha ocurrido un error: ${err}`)
            })
    };

    return (
        <div className="flex flex-col justify-center items-center max-w-200 mx-auto">
            <h1 className="text-center text-2xl p-2">Creación de producto</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-2/5">
                <label htmlFor="productName">Nombre</label>
                <input className="input-item" type="text" name="productName" placeholder="Nombre del producto" required />
                <label htmlFor="price">Precio</label>
                <input className="input-item" type="number" name="price" placeholder="Precio del producto" required />
                <label htmlFor="urlImage">URL imágen</label>
                <input className="input-item" type="url" name="urlImage" placeholder="URL imágen del producto" required />
                <label htmlFor="color">Color</label>
                <input className="input-item" type="text" name="color" placeholder="Color del producto" required />
                <label htmlFor="description">Descripción</label>
                <textarea className="input-item" name="description" rows="5" placeholder="Descripción del producto" required />
                <button className="btn-form" type="submit">Crear producto</button>
            </form>
        </div>
    )
};

export default Form;
