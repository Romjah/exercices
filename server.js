const express = require('express');
const cors = require('cors');  // Ajout de cette ligne

let fetch;

import('node-fetch').then(module => {
    fetch = module.default;
});
require('dotenv').config();

const app = express();
const PORT = 5001;

// Utilisation du middleware CORS
app.use(cors());

app.get('/search', async (req, res) => {
    const { query } = req.query;
    const API_KEY = process.env.API_KEY;

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des données.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});