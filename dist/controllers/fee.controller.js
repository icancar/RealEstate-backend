"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feeController = void 0;
const fee_1 = __importDefault(require("../models/fee"));
class feeController {
    constructor() {
        this.getFee = (req, res) => {
            let username = req.body.username;
            fee_1.default.findOne({ 'admin': username }, (err, fee) => {
                if (err)
                    console.log(err);
                else
                    res.json(fee);
            });
        };
        this.updateFee = (req, res) => {
            let username = req.body.username;
            let prodaja = req.body.prodaja;
            let iznajmljivanje = req.body.iznajmljivanje;
            fee_1.default.updateOne({ "admin": username }, { $set: { 'prodaja': prodaja, 'iznajmljivanje': iznajmljivanje } }).then((ok) => {
                res.json({ "message": "feeUpdated" });
            }).catch((err) => {
                res.json({ "message": err });
            });
        };
    }
}
exports.feeController = feeController;
//# sourceMappingURL=fee.controller.js.map