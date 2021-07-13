"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Fee = new Schema({
    prodaja: {
        type: Number
    },
    iznajmljivanje: {
        type: Number
    },
    admin: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Fee', Fee, 'fee');
//# sourceMappingURL=fee.js.map