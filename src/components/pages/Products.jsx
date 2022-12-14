import useFetch from "../../hooks/useFetch";

const Products = () => {
    const { data, error, loading } = useFetch("public/products")
    if (loading) return <h1 className="text-center text-2xl ">Cargando datos...</h1>
    if (error) return <h1 className="text-center text-2xl font-medium text-red-400">Ocurrió un error en la petición :c</h1>

    return (
        <>
            <h1 className="text-center text-2xl font-medium">Productos</h1>
            <p className="text-center">Acá podrás explorar todos nuestros productos</p>
            {
                // Validamos si hay productos con un operador ternario
                data.length === 0 ? (<h1>No existen productos</h1>) :
                data.map(product => (
                    <div>
                        {
                            JSON.stringify(product)
                        }
                    </div>
                ))
            }

        </>
    )
};

export default Products;
