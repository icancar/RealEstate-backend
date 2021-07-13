import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Fee = new Schema(
    {
        prodaja: {
            type: Number
        },
        iznajmljivanje: {
            type: Number
        },
        admin:{
            type:String
        }
    }
);

export default mongoose.model('Fee', Fee, 'fee');