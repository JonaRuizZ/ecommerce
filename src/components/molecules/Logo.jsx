import { NavLink } from 'react-router-dom';
import imgLogo from '../../../imgs/logo.png'

const Logo = () => {
    return (
        <div>
            <NavLink to="/">
                <img src={imgLogo} alt="Logo online shopping" className="h-12" />
            </NavLink>
        </div>
    )
};

export default Logo;
