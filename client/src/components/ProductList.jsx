import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList({ products, pagination, setPagination }) {
	const navigate = useNavigate();

	const handleProductClick = (product) => {
		localStorage.setItem('selectedProduct', JSON.stringify(product));
		navigate('/product-details');
	};

	const handlePageChange = (newPage) => {
		setPagination((prev) => ({ ...prev, currentPage: newPage }));
	};

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.map((product, index) => (
					<div key={index} className="border p-4 cursor-pointer" onClick={() => handleProductClick(product)}>
						<h2>{product.productName}</h2>
						<p>Price: ${product.price}</p>
						<p>Rating: {product.rating}</p>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-4">
				<button onClick={() => handlePageChange(pagination.currentPage - 1)} disabled={pagination.currentPage === 1} className="mr-2">Previous</button>
				<button onClick={() => handlePageChange(pagination.currentPage + 1)} disabled={pagination.currentPage === pagination.totalPages}>Next</button>
			</div>
		</div>
	);
}

export default ProductList;