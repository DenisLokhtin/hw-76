const express = require('express');
const message = require('./app/app');

const app = express();
app.use(express.json());
const port = 8000;

app.use('/message', message);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});

