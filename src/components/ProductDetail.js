import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';

function ProductDetail() {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch( err =>{
            console.log("Err", err);
        });

        dispatch(selectedProducts(response.data));
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [productId])
    
  return (
    <div className='pt-40 pb-20'>
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? (
                <div>Loading...</div>
            ) : (
            <div className='ui placeholder segment'>
                <div className='ui two column stackable aligned grid'>
                    <div className='max-md:hidden'>
                        <div className='ui vertical divider'>AND</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex justify-center">
                            <img src={image} alt={title} className="py-10 rounded-lg w-full max-w-sm" />
                        </div>
                        <div className="px-0 sm:px-10 py-10 flex flex-col justify-center">
                            <div>
                                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                                <h2 className='pt-4'>
                                    <a className='ui teal tag label'>${price}</a>
                                </h2>
                                <h3 className="mt-6 p-3 font-semibold text-xl text-gray-700 mb-4 border-2 rounded-lg bg-[#f3f4f5] text-[#804004]">{category}</h3>
                                <p className="text-gray-600 mb-6">{description}</p>
                            </div>
                            <button className="w-max max-md:mb-16 mt-6 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                                <i className="fas fa-shopping-cart mr-2"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default ProductDetail