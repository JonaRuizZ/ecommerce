import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { API_URL, TOKEN_NAME } from "../../constants/env";
import { UserContext } from "../../context/UserContext";
import { setToken } from "../../helpers/auth";
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
    const { setUserData } = useContext(UserContext);

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
                setUserData(res.data.data.user)
                navigation("/")
            })
            .catch(err => {
                setCargando(false)
                setError(err.response.data.data)
            });
    };

    if (localStorage.getItem(TOKEN_NAME)) return <Navigate to="/" />

    return (
        <LoginTemplate title="Iniciar sesión">
            <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    onChange={changeData}
                    className="input-item"
                    type="email"
                    name="email"
                    placeholder="Escribe tu correo electrónico"
                    autoComplete="userName"
                    required
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    onChange={changeData}
                    className="input-item"
                    type="password"
                    name="password"
                    placeholder="Escribe tu contraseña"
                    autoComplete="current-password"
                    required
                />
                {
                    error && <p className="error-form">Usuario o contraseña invalida</p>
                }
                <button type="submit" className="btn-form">
                    {
                        cargando ? "Validando datos..." : "Ingresar"
                    }
                </button>
                <p className="text-xs text-gray-500">*No compartas tus datos</p>
                <Link to="/register" className="link-form">¿No tienes cuenta? Regístrate</Link>
            </form>
        </LoginTemplate>
    )
};

export default Login;
