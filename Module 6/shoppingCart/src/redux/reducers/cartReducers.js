import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartProd";

const  initialState = [  {id:1, name:"Iphone", price: 10000}]
const cartReducers = (product=initialState, action)=>{

    switch (action.type) {
        case ADD_TO_CART:
            return [...product,action.payload]
        case REMOVE_FROM_CART:
            console.log(action.payload)
            const newProduct = product.filter(ele => ele.id !== action.payload.id)
            console.log(newProduct)
                return [...newProduct]
    
    
        default: 
            return product;
         
    }
}

export default cartReducers