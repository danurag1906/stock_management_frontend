// import React from 'react'
import {PiBookOpenTextLight} from 'react-icons/pi'

import ProductSingleCard from './ProductSingleCard'

const ProductsCard = ({products}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-col-3 xl:grid-col-4' >
      {products.map((product,index)=>(
        // console.log(product)
        <ProductSingleCard key={index} product={product} index={index} />
      ))}
    </div>
  )
}

export default ProductsCard