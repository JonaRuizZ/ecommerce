import { Link, NavLink } from "react-router-dom";
import { formatPrice } from "../../helpers/number";
import { texto } from "../../helpers/text";

const ProductCard = ({ product }) => {
    const { id, product_name, price, images, description } = product
    return (
        <article className="bg-blue-100 w-full shadow-lg p-5 rounded-md">
            <div className="mb-5 overflow-hidden flex justify-center items-center">
                <Link to={`productos/${id}`}>
                    <img
                        className="rounded-lg h-52 object-cover"
                        src={images[0]}
                        alt={product_name}
                    />
                </Link>
            </div>
            <div className="mb-3">
                <NavLink to={`productos/${id}`}>
                    <h3 className="font-semibold text-xl tracking-tight">
                        {texto(product_name)}
                    </h3>
                </NavLink>
                <p className="text-gray-500">
                    {texto(description)}
                </p>
            </div>
            <div>
                <span className="text-xl font-semibold">
                    Precio USD: {formatPrice(price)}
                </span>
            </div>
        </article >
    )
};

export default ProductCard;
