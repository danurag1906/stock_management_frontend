import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

const ProductsTable = ({products}) => {
  return (
    <table className='w-full border-seperate border-spacing-2' >
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md max-md:hidden' >No.</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden' >Product Name</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden' >Quantity</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden' >Price</th>
                            <th className='border border-slate-600 rounded-md ' >Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,index)=>(
                            <tr key={product._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index+1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {product.name}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {product.quantity}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {product.price}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`products/details/${product._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`products/edit/${product._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`products/delete/${product._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
  )
}

export default ProductsTable