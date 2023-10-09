import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {  useSnackbar } from 'notistack';

const EditProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar()
  const base_url=import.meta.env.VITE_BASE_URL

  useEffect(() => {
    setLoading(true);
    axios.get(`${base_url}/products/${id}`).then((response) => {
      setName(response.data.product.name);
      setQuantity(response.data.product.quantity);
      setPrice(response.data.product.price);
      setLoading(false);
    });
  }, []);

  const handleProductEdit = () => {
    const data = {
      name,
      quantity,
      price,
    };
    setLoading(true);
    axios
      .put(`${base_url}/products/${id}`, data)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar('Product Edited Successfully',{variant:'success'})
        navigate("/");
      })
      .catch((error) => {
        // alert("some error occured. please check console");
        console.log(error);
        enqueueSnackbar(error,{variant:'error'})
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 roundex-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-4 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Quantity</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border-2 border-gray-500 px-4 py-4 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-4 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleProductEdit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
