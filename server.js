const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());

app.get('/budget', (req, res) => {
    
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading budget data.");
        }
        
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
