const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3500;

dotenv.config();

mongoose
.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then(() => {
        console.log("connected to database");
        const app = express();

        // ------------------------------ middleware ------------------------------ //
        app.use(express.json());
        app.use(cors());

        // -------------------------------- routes -------------------------------- //
        app.get('/', (req, res) => {res.status(200).json("Home Page")}); // home page
        app.use('/articles', require('./routes/article-route'));

        app.all('*', (req, res) => {
            res.status(404);
            if (req.accepts('json')) {
                res.json({ "error": "404 Not Found" });
            } else {
                res.type('txt').send("404 Not Found");
            }
        });

        // ------------------------------------------------------------------------ //
        app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});

    })
    .catch((error) => {
    console.log({ error });
    throw new Error(error)
});