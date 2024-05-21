

const reducer = (state , action)=>{
switch (action.type) {
    case "CLEAR_CART":{
        return {...state , cart:[]}
    }
    case "REMOVE" : {
        return {
            ...state , 
            cart: state.cart.filter(item => item.id !== action.payload)
        }
    }
    case "CHANGE_QUANTITY" : {
        const tempCart = state.cart.map(item => {
            if (item.id === action.payload.id && action.payload.quantity > 0){
                return {...item , quantity:action.payload.quantity}
            }
            return item;
        })
        return {...state , cart:tempCart}
    }
    }
}
export default reducer;