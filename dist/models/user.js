"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
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
    accepted: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('User', User, 'users');
//# sourceMappingURL=user.js.map