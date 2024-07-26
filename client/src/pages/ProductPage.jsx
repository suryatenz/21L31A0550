import React from 'react';

function ProductPage() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.productName}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                    <p>Availability: {product.availability}</p>
                </div>
            ) : (
                <p>No product selected</p>
            )}
        </div>
    );
}

export default ProductPage;