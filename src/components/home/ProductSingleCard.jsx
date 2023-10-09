import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineDelete} from 'react-icons/md'

const ProductSingleCard = ({product,index}) => {
  return (
    <div
        key={product._id}
        className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
        >
          <h4 className='my-2 text-gray-500' >{index+1}</h4>
          <div className='flex justify-start items-center gap-x-2' >
            <h2 className='my-1 font-bold' >Product Name : </h2>
            <h2 className='my-1' >{product.name}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2' >
          <h2 className='my-1 font-bold' >Product Quantity : </h2>
            <h2 className='my-1' >{product.quantity}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2' >
          <h2 className='my-1 font-bold' >Product Price : </h2>
            <h2 className='my-1' >{product.price}</h2>
          </div>
          <div className='flex justify-around items-center gap-x-2 mt-4 p-4' >
            <Link to={`/products/details/${product._id}`} >
              <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
            </Link>
            <Link to={`/products/edit/${product._id}`} >
              <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
            </Link>
            <Link to={`/products/delete/${product._id}`} >
              <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
            </Link>
          </div>

        </div>
  )
}

export default ProductSingleCard