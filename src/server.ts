import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import loginRouter from './routes/login.routes';
import uploadRouter from './routes/upload.routes';
import adminRouter from './routes/admin.routes';
import estateRouter from './routes/estate.routes';


const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/realEstate');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongo ok')
});

const router = express.Router();
router.use('/users', loginRouter);
router.use('/upload', uploadRouter);
router.use('/admin', adminRouter);
router.use('/estates', estateRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));