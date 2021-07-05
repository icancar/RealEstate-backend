import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        picture: {
            type: String
        },
        email: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        userType: {
            type: String
        },
        accepted:{
            type:Boolean
        }
    }
);

export default mongoose.model('User', User, 'users');