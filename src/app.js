const ProductManager = require('./ProductManager');
const express = require('express');
const app = express();

app.get('/products', async (req, res) => {
    const allProducts = await productManager.getProducts();
    res.json(allProducts);
});

app.get('/products/:pid', async (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
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
