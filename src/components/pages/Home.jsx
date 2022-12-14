import { API_URL } from "../../constants/env";

const Home = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-medium">Bienvenidos {API_URL}</h1>
      <p className="text-center">Bienvenido acá podrás comprar todo lo que necesitas</p>
    </>
  )
};

export default Home;
