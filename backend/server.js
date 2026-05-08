const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    console.log("GET ROUTE METHOD HIT")
  res.send('Backend is working');
});

app.post('/item', (req,res) => {
    console.log("POST ROUTE METHOD HIT")
    console.log(req.body)
    res.send({
        message: "REQ OBJECT RECEIVED",
        data: req.body
    })
})

app.listen(PORT, () => {
  console.log('BACKEND IS GETTING CALLED');
});
