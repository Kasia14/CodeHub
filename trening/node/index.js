const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Treść z endpointa'));

app.listen(3000, () => console.log(`App started`));