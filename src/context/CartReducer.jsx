const CartReducer = (state, action) => {
    // console.log(action) para ver la accion cuando tengamos algun problema
    switch (action.type) {
        case "ADD_TO_CART":
            return { 
                ...state, 
                cart:[...state.cart, action.payload] 
            }
        case "REMOVE_FROM_CART":
            return { 
                ...state, 
                cart:[...state.cart.filter(p => p.id === action.payload.id)],
            }
        case "CLEAR_CART":
            return{
                cart:[]
            }
        default:
            return state;
    }
};

export default CartReducer;
