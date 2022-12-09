import imgLogo from '../../../imgs/logo.png';

const RegisterTemplate = ({ children, title }) => {
    return (
        
        <div className="bg-gradient-to-r from-green-400 to-blue-400 h-screen">
            <div className="max-w-200 mx-auto h-full flex items-center justify-center">
                <div className="w-2/5 bg-gray-200 p-6 rounded-lg border-2 border-gray-300 shadow-lg">
                    <div className="flex justify-center items-center pb-1">
                        <img src={imgLogo} alt="Logo login" className="h-16" />
                    </div>
                    <div className="text-center text-2xl pt-2">{ title }</div>
                    { children}
                </div>
            </div>
        </div>
    )
};

export default RegisterTemplate;
