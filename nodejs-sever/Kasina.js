import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

//htt://localhost:3000/
app.get('/',(req, res)=> {
    res.send('Hello, Nan!');
});

//htt://localhost:3000/api/getBook/100/u100
app.get('/api/getBook/:bookId/:userId', (req, res) => {
    res.send(req.params);
});

const myData ={
    "fname" : "Kasina",
    "lname" : "Soipoungnak",
    "email" : "kasina.soi@rmutto.ac.th",
    "major" : "Information Technology"
};

//htt://localhost:3000/api/getProfile
app.get('/api/getProfile', (req, res) => {
    res.json(myData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); 
});