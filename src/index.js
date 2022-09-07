const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("server listening on port", port));


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to MongoDB Atlas'))
    .catch((error) => console.error(error))