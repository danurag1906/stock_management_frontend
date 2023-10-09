import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import ProductsTable from '../components/home/productsTable'
import ProductsCard from '../components/home/productsCard'



const Home = () => {

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [showType,setShowType]=useState('table')
    // const base_url=process.env.REACT_APP_BASE_URL
    const base_url=import.meta.env.VITE_BASE_URL

    useEffect(()=>{
        setLoading(true)
        axios.get(`${base_url}/products`)
        .then((response)=>{
            setProducts(response.data.data)
            // console.log(response.data.data);
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false)
        })
    },[])

  return (
    <div className='p-4' >
        <div className='flex justify-center items-center gap-x-4' >
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={()=>setShowType('table')}
            >
                Table
            </button>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={()=>setShowType('card')}
            >
                Card
            </button>
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8' >
                Product's List
            </h1>
            <Link to='products/create' >
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
        </div>

        {
            loading?
            <Spinner/>
            :
            showType==='table'?(<ProductsTable products={products} />):(<ProductsCard products={products} />)
        }

    </div>
  )
}

export default Home