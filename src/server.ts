import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/realEstate');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongo ok')
});

const router = express.Router();


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));