const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Jesus Loves Me, You and Everyone.! My comfort , My shelter. Loruko Jesu, la n fowo soya, wipe ayo lawa yo fi lo odun yi ja!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
