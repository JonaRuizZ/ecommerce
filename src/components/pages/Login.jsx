import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL, TOKEN_NAME } from "../../constants/env";
import { getToken, setToken } from "../../helpers/auth";
import LoginTemplate from "../templates/LoginTemplate";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState();

    const [cargando, setCargando] = useState(false);

    const changeData = e => {
        //console.log({[e.target.name]: e.target.value})
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const navigation = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        setCargando(true)
        setError(null)

        //Petición AXIOS
        axios.post(`${API_URL}/public/login`, data)
            .then(res => {
                setCargando(false)
                // localStorage.setItem(res.data.data.token)
                // console.log(res.data.data.token)
                setToken(res.data.data.token)
                navigation("/")
            })
            .catch(err => {
                setCargando(false)
                setError(err.response.data.data)
            });
    };

    if (localStorage.getItem(TOKEN_NAME)) return <Navigate to="/" />

    return (
        <LoginTemplate>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
                <label htmlFor="email">Correo electrónico</label>
                <input onChange={changeData} className="py-1 px-3 mb-3 border border-gray-300 shadow-md" type="email" name="email" placeholder="Escribe tu correo electrónico" required />
                <label htmlFor="password">Contraseña</label>
                <input onChange={changeData} className="py-1 px-3 mb-3 border border-gray-300 shadow-md" type="password" name="password" placeholder="Escribe tu contraseña" required />
                {
                    error && <p className="pb-2 text-center text-red-500 font-bold">Usuario o contraseña invalida</p>
                }
                <button type="submit" className="bg-blue-400 py-3 rounded-lg hover:bg-blue-500 duration-300 text-white">
                    {
                        cargando ? "Validando datos..." : "Ingresar"
                    }
                </button>
                <p className="text-xs text-gray-500">*No compartas tus datos</p>
            </form>
        </LoginTemplate>
    )
};

export default Login;
