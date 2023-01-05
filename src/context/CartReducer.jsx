const CartReducer = (state, action) => {
    // console.log(action) para ver la accion cuando tengamos algun problema
    console.log(action)
    // action: { es un objeto que contiene: 
    //    - payload: Contiene los datos del producto de la API
    //    - type: Contiene el case del switch como por ejemplo: "REMOVE_FROM_CART", "ADD_TO_CART" etc...
    // }
    console.log(state)
    // state: es el {cart: Array(4)} cuantos productos hemos ingresado al carrito
    switch (action.type) {
        case "ADD_TO_CART":
            return { 
                ...state, 
                cart:[...state.cart, action.payload] 
            }
        case "REMOVE_FROM_CART":
            return { 
                ...state,
                cart:[...state.cart.filter(p => p.id !== action.payload.id)]
            }
        case "CLEAR_CART":
            return {
                cart:[]
            }
        default:
            return state;
    }
};

export default CartReducer;
