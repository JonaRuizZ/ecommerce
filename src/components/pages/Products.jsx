import useFetch from "../../hooks/useFetch";
import Loader from "../atoms/Loader";
import ProductCard from "../molecules/ProductCard";

const Products = () => {
    const { data, error, loading } = useFetch("public/products")
    if (loading) return <Loader />
    if (error) return <h1 className="text-center text-2xl font-medium text-red-400">Ocurrió un error en la petición :c</h1>

    return (
        <>
            <article className="max-w-200 m-auto py-5">
                <h1 className="text-center text-2xl font-medium pb-4">Encuentra lo que andas buscando</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        // Validamos si hay productos con un operador ternario
                        data.length === 0 ? (<h1>No existen productos</h1>) :
                            data.map(product => (
                                //JSON.stringify(product)
                                <ProductCard key={product.id} product={product} />
                            ))
                    }
                </div>
            </article>
        </>
    )
};

export default Products;
