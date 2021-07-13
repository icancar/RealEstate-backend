"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Offer = new Schema({
    typeOfOffer: {
        type: String
    },
    idAdvertisement: {
        type: Number
    },
    nameOfAdvertisement: {
        type: String
    },
    price: {
        type: Number
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
    status: {
        type: String
    },
    idOffer: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Offer', Offer, 'offers');
//# sourceMappingURL=offer.js.map