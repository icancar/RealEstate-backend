import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Estate = new Schema(
    {
        name: {
            type: String
        },
        municipality: {
            type: String
        },
        city: {
            type: String
        },
        street: {
            type: String
        },
        streetNumber: {
            type: String
        },
        ownerUsername: {
            type: String
        },
        typeOfAdvertisement: {
            type: String
        },
        price: {
            type: Number
        },
        idAdvertisement: {
            type: Number
        },
        size: {
            type: Number
        },
        typeOfEstate: {
            type: String
        },
        numberOfFloors:{
            type:Number
        },
        floorNumber:{
            type:Number
        },
        gallery:{
            type:Array
        },
        furniture:{
            type:Boolean
        },
        numberOfRooms:{
            type:Number
        },
        promoted:{
            type:Boolean
        },
        approved: {
            type: Boolean
        },
        views: {
            type: Number
        },
        sold:{
            type:Boolean
        }
    }
);

export default mongoose.model('Estate', Estate, 'estates');