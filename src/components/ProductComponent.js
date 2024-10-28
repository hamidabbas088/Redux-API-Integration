import React from 'react';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="link w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={id}>
        <Link to={`/product/${id}`}>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col cursor-pointer border-2">
          <div className="p-4 h-64">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500 mt-2">${price}</p>
            <p className="text-gray-400">{category}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap -mx-4">
      {renderList}
    </div>
  );
}

export default ProductComponent;
