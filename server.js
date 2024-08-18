const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'prueba@gmail.com' && password === '123456') {
        const token = 'eyJhbGciOiJIUzI1NiIsInRScCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9';
        res.json({ token });
    } else {
        res.status(401).json({ message: 'credenciales inválidas' });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
