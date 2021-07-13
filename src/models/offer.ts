import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Offer = new Schema(
    {
        typeOfOffer: {
            type: String
        },
        idAdvertisement: {
            type: Number
        },
        nameOfAdvertisement: {
            type: String
        },
        price:{
            type:Number
        },
        offerFrom: {
            type: String
        },
        offerTo: {
            type: String
        },
        date1: {
            type: String
        },
        date2: {
            type: String
        },
        accepted: {
            type: Boolean
        },
        transactionFees: {
            type: Number
        },
        status:{
            type:String
        },
        idOffer:{
            type:String
        }
    }
);

export default mongoose.model('Offer', Offer, 'offers');