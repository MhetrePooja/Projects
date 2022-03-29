import React, {} from 'react'

import Product from '../Product/Product'
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/actions/cart'

let products = [
    {id:1, name:"Iphone", price: 50000},
    {id:2, name:"Samsung", price: 11000},
    {id:3, name:"MI", price: 14000},
    {id:4, name:"Hawaei", price: 4000},
  
  ]
function ProductList() {
  const dispatch = useDispatch()
  return (
    <div className='productList'>ProductList
    {products.map((ele, i)=> <div className='eachItem' key={i}>  <Product id={ele.id} prod  ={ele} />     <button onClick={()=>dispatch(addToCart(ele)) }> Add to cart</button>  </div> )}

    </div>
  )
}

export default ProductList