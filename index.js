const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);
app.listen(8080, () => console.log('server running on port 8080'));
