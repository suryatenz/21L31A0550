import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
    const { companyName, categories, productCount, minPrice, maxPrice, page } = req.query;

    try {
        const authResponse = await axios.post('http://20.244.56.144/test/auth', {
            "companyName": "goMart",
            "clientID": "0a0b0554-0e8b-4f1f-8c2c-178a2ca67284",
            "clientSecret": "YtRTyukNGBdCYhsf",
            "ownerName": "Surya Prajyesh Eatha",
            "ownerEmail": "sprajyesh@gmail.com",
            "rollNo": "21L31A0550"
        });

        console.log('Auth response:', authResponse.data);

        if (!authResponse.data || !authResponse.data.access_token) {
            throw new Error('Failed to obtain access token');
        }

        const token = authResponse.data.access_token;
        console.log('Token:', token);

        const url = `http://20.244.56.144/test/companies/${companyName}/categories/${categories}/products/top-${productCount}&minPrice-${minPrice}&maxPrice-${maxPrice}`;
        console.log('Request URL:', url);

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        console.log('Response data:', response.data);

        if (!response.data || !Array.isArray(response.data)) {
            throw new Error('Invalid response data');
        }

        const products = response.data;
        const pageSize = 10;
        const currentPage = parseInt(page) || 1;
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        res.json({
            products: products.slice(startIndex, endIndex),
            totalProducts: products.length,
            currentPage,
            totalPages: Math.ceil(products.length / pageSize)
        });
    } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).send(error.response ? error.response.data : error.message);
    }
});

export default router;
