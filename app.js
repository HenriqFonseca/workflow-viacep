const express = require('express');
const axios = require('axios'); // Para fazer requisições HTTP
const app = express();

app.get('/consulta/:cep', async (req, res) => {
    const { cep } = req.params;
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Erro ao consultar CEP');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
