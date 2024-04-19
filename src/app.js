const ProductManager = require('./ProductManager');
const express = require('express');
const app = express();

app.get('/products', async (req, res) => {
    const limit = parseInt(req.query.limit);
    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ error: 'El  limit debe ser un número positivo.' });
    }
    const products = productManager.getProducts(limit); 
    res.json(products);
});


app.get('/products/:pid', async (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = ProductManager.getProductById(productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
