import React from 'react'
import {GoDeviceMobile} from "react-icons/go"

function Product( {prod}) {



   
  return (
    <div className='product'>
        <GoDeviceMobile className='device' />
        <div>       <p>  Product : {prod?.name} </p>  </div>
        <div>       <p>  Price : {prod?.price} </p>  </div>
        <br />
   
           
        
    </div>
  )
}

export default Product