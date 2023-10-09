import React,{useState} from 'react'
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from 'notistack'

const DeleteProduct = () => {

    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const {id}=useParams()
    const base_url=import.meta.env.VITE_BASE_URL

    const handleProductDelete=()=>{
        setLoading(true)
        axios.delete(`${base_url}/products/${id}`)
        .then(()=>{
            setLoading(false)
            enqueueSnackbar('Product Deleted Successfully',{variant:'success'})
            navigate('/')
        })
        .catch((error)=>{
            setLoading(false)
            // alert('something went wrong. please check console')
            console.log(error);
            enqueueSnackbar(error,{variant:'error'})
        })
    }

  return (
    <div className='p-4' >
        <BackButton/>
        <h1 className='text-3xl my-4' >Delete Book</h1>
        {loading?<Spinner/>:''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 m-auto' >
            <h3 className='text-2xl'> Are you sure you want to delete this product?</h3>
            <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleProductDelete}>
                Yes, Delete it.
            </button>
        </div>
    </div>
  )
}

export default DeleteProduct