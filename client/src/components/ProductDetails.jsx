import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const navigate = useNavigate();
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (!product) {
        return <p>No product selected</p>;
    }

    return (
        <div className="p-4">
            <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 mb-4">Back</button>
            <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>
            <p className="mb-2">Price: ${product.price}</p>
            <p className="mb-2">Rating: {product.rating}</p>
            <p className="mb-2">Discount: {product.discount}%</p>
            <p className="mb-2">Availability: {product.availability}</p>
        </div>
    );
}

export default ProductDetails;