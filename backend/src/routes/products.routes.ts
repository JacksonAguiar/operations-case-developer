
import express from "express";

const ProductRoutes = express();

ProductRoutes.get('/products', (req, res) => {
    res.send('Rota de produtos');
});

ProductRoutes.get('/products/:id', (req, res) => {
    res.send('Rota de produtos');
});

ProductRoutes.get('/:category/products/', (req, res) => {
    res.send('Rota de produtos');
});

ProductRoutes.post('/products', (req, res) => {
    res.send('Rota de produtos');
});

ProductRoutes.patch('/products', (req, res) => {
    res.send('Rota de produtos');
});

ProductRoutes.delete('/products/:id', (req, res) => {
    res.send('Rota de produtos');
});


export default ProductRoutes;