import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        cart:[]
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);
    // state: valor del context
    // dispatch: función que modifica el estado
    // CartReducer: función que modifica el valor que se encuentra en el estado

    return(
        <CartContext.Provider value={{ state, dispatch }}>
            { children }
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };
