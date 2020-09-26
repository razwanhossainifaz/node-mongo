const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Shuvo' , 'Sifat' , 'Ammo' , 'Abbu'];

app.get('/' , (req , res) => {
    res.send("I Know How To Open Node");
})

app.get('/users/:id' , (req , res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id , name });
})

// Post

app.post('/addUser' , (req , res) => {
    // save to database
    const user = req.body
    user.id = 10
    res.send(user);
})

app.listen(3000 , () => console.log('Listening to port 3000'));