const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
const cors = require('cors');
const routes = require('./routes/routes');
const connectDB = require('./mongodb');

connectDB();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK!');
});

app.use('/api', routes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
