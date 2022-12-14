import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants/env";
import RegisterTemplate from "../templates/RegisterTemplate";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    details: {
      fullName: ""
    }
  });

  const [error, setError] = useState();
  const [cargando, setCargando] = useState(false);
  const [registrado, setRegistrado] = useState();

  const changeData = e => {
    //console.log({[e.target.name]: e.target.value})
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const handleRegister = e => {
    e.preventDefault()
    setCargando(true)
    axios.post(`${API_URL}/public/users`, data) 
    setError(null)
      .then(res => {
        setCargando(false)
        setRegistrado(null)
        // console.log(res.data.messages[0].message)
        setRegistrado(res.data.messages[0].message)
      })
      .catch(err => {
        setCargando(false)
        setRegistrado(null)
        // console.log(err.response.data.errors[0].message)
        setError(err.response.data.errors[0].message)
      })
  };

  return (
    <RegisterTemplate title="Regístrate">
      <form onSubmit={handleRegister} className="flex flex-col max-w-sm mx-auto">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          onChange={changeData}
          className="input-item"
          type="text"
          name="fullName"
          placeholder="Escrite tu nombre completo"
          required
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          onChange={changeData}
          className="input-item"
          type="email"
          name="email"
          placeholder="Escribe tu correo electrónico"
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          onChange={changeData}
          className="input-item"
          type="password"
          name="password"
          placeholder="Escribe tu contraseña"
          required
        />
        <label htmlFor="confirmPassword">Confirma contraseña</label>
        <input
          className="input-item"
          type="password"
          name="confirmPassword"
          placeholder="Confirma tu contraseña"
          required
        />
        {
          error && <p className="error-form">{error}</p>
        }
        {
          registrado && <p className="pb-2 text-center text-green-500 font-bold">{registrado} Ya puedes logearte</p>
        }
        <button type="submit" className="btn-form">
          {
            cargando ? "Registrando..." : "Registrar"
          }
        </button>
        <Link to="/login" className="link-form">¿Ya tienes cuenta? Logéate</Link>
      </form>
    </RegisterTemplate>
  )
};

export default Register;
