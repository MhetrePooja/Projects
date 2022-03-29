import React, {  } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'
import {useDispatch} from "react-redux"
import {removeFromCart} from '../../redux/actions/cart'
function Cart() {
const product  = useSelector(state=> state)
const dispatch = useDispatch()
  return (
    <div className='cart'>
        <p>Cart</p>
        {product.length ? <div className='productList' >
          {product.map((ele, i)=>  <div className='eachCartProd'  key={i}> <Product prod={ele}  /> <button onClick={()=>dispatch(removeFromCart(ele)) }> Remove</button> </div>)}
          </div>
          : <p> Cart empty...</p>
     }

       
    </div>
  )
}

export default Cart