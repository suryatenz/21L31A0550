import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBar from '../components/FilterBar';

const HomePage = () => {
	const [filters, setFilters] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('http://localhost:5000/', {
					params: {
						...filters,
					}
				});
				setProducts(response.data.products);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, [filters]);

	return (
		<div>
			<FilterBar setFilters={setFilters} />
			<div>
				{products.map(product => (
					<div key={product.id}>{product.name}</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;