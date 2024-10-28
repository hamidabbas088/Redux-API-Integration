import React,{useEffect} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from "../redux/actions/productActions"

function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
            console.log(err, "Err");
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() =>{
        fetchProducts();
    }, [])

    console.log("Products :", products )

  return (
    <div className='pt-40 pb-20 ui container'>
        <div className=''>
            <ProductComponent />
        </div>
    </div>
  )
}

export default ProductListing