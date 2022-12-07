import axios from "axios";
import { useState } from "react";
import imgLogo from '../../../imgs/logo.png';
import { API_URL } from "../../constants/env";

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

    const handleSubmit = e => {
        e.preventDefault()
        setCargando(true)
        setError(null)

        //Petición AXIOS
        axios.post(`${API_URL}/public/login`, data)
            .then(res => {
                setCargando(false)
                // localStorage.setItem(res.data.data.token)
                console.log(res.data.data.token)
                localStorage.setItem("tokenEcommerce", res.data.data.token)
            })
            .catch(err => {
                setCargando(false)
                setError(err.response.data.data)
            });
    };


    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-400 h-screen">
            <div className="max-w-200 mx-auto h-full flex items-center justify-center">
                <div className="w-2/5 bg-gray-200 p-6 rounded-lg border-2 border-gray-300 shadow-lg">
                    <div className="flex justify-center items-center pb-1">
                        <img src={imgLogo} alt="Logo login" className="h-16" />
                    </div>
                    <div className="text-center text-2xl pt-2">Inicia sesión</div>
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
                </div>
            </div>
        </div>
    )
};

export default Login;
