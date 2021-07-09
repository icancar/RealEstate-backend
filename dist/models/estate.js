"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Estate = new Schema({
    name: {
        type: String
    },
    minicipality: {
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
    numberOfFloors: {
        type: Number
    },
    floorNumber: {
        type: Number
    },
    gallery: {
        type: Array
    },
    furniture: {
        type: Boolean
    },
    numberOfRooms: {
        type: Number
    },
    promoted: {
        type: Boolean
    },
    approved: {
        type: Boolean
    },
    views: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Estate', Estate, 'estates');
//# sourceMappingURL=estate.js.map