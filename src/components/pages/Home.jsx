import { API_URL } from "../../constants/env";

const Home = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-medium">Bienvenidos {API_URL}</h1>
      <p>Estos cambios están hechos por branch dev</p>
    </>
  )
};

export default Home;
