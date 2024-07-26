import React, { useState } from 'react';

const FilterBar = ({ setFilters }) => {
	const [filters, setFiltersState] = useState({
		companyName: '',
		categories: '',
		minPrice: '',
		maxPrice: '',
		productCount: ''
	});

	const handleFilter = async() => {
		setFilters(filters);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFiltersState({
			...filters,
			[name]: value
		});
	};

	const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
	const categoriesList = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

	return (
		<div className="p-4 bg-gray-200">
			<select name="companyName" value={filters.companyName} onChange={handleChange} className="mr-2">
				<option value="">Select Company</option>
				{companies.map(company => (
					<option key={company} value={company}>{company}</option>
				))}
			</select>
			<select name="categories" value={filters.categories} onChange={handleChange} className="mr-2">
				<option value="">Select Category</option>
				{categoriesList.map(category => (
					<option key={category} value={category}>{category}</option>
				))}
			</select>
			<input
				type="number"
				name="minPrice"
				value={filters.minPrice}
				onChange={handleChange}
				placeholder="Min Price"
				className="mr-2"
			/>
			<input
				type="number"
				name="maxPrice"
				value={filters.maxPrice}
				onChange={handleChange}
				placeholder="Max Price"
				className="mr-2"
			/>
			<input
				type="number"
				name="productCount"
				value={filters.productCount}
				onChange={handleChange}
				placeholder="Product Count"
				className="mr-2"
			/>
			<button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2">Apply Filters</button>
		</div>
	);
};

export default FilterBar;