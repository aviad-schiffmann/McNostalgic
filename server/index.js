const express = require('express');
const app = express();
const port = 80;
const path = require('path');

app.use('/', (...args) => {
    let x = path.join(__dirname, '..');
    express.static(x)(...args);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT ?? port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 