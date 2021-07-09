"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estateController = void 0;
const estate_1 = __importDefault(require("../models/estate"));
class estateController {
    constructor() {
        this.getAllApprovedEstates = (req, res) => {
            estate_1.default.find({ 'approved': true }, (err, Estate) => {
                if (err)
                    console.log(err);
                else
                    res.json(Estate);
            });
        };
        this.acceptEstateRequest = (req, res) => {
            let id = req.body.id;
            estate_1.default.updateOne({ 'idAdvertisement': id }, { $set: { 'approved': true } }).then((ok) => {
                res.json({ 'message': 'requestAccepted' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.declineEstateRequest = (req, res) => {
            let id = req.body.id;
            estate_1.default.deleteOne({ 'idAdvertisement': id }).then((ok) => {
                res.json({ 'message': 'requestDeclined' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.getAllEstatesRequest = (req, res) => {
            estate_1.default.find({ 'approved': false }, (err, Estate) => {
                if (err)
                    console.log(err);
                else
                    res.json(Estate);
            });
        };
        this.searchByCity = (req, res) => {
            let city = req.body.cityName;
            estate_1.default.find({ 'approved': true, 'name': { $regex: city } }, (err, estates) => {
                if (err)
                    console.log(err);
                else {
                    res.json(estates);
                }
            });
        };
        this.searchByPrice = (req, res) => {
            let minPrice = req.body.priceMin;
            let maxPrice = req.body.priceMax;
            console.log(minPrice);
            console.log(maxPrice);
            estate_1.default.find({ 'approved': true, 'price': { $gte: minPrice, $lte: maxPrice } }, (err, estates) => {
                if (err)
                    console.log(err);
                else {
                    res.json(estates);
                }
            });
        };
        this.searchByPriceAndCity = (req, res) => {
            let minPrice = req.body.priceMin;
            let maxPrice = req.body.priceMax;
            let cityName = req.body.cityName;
            estate_1.default.find({ 'approved': true, 'name': { $regex: cityName }, 'price': { $gte: minPrice, $lte: maxPrice } }, (err, e) => {
                if (err)
                    console.log(err);
                else {
                    res.json(e);
                }
            });
        };
        this.getAllEstatesForUser = (req, res) => {
            let username = req.body.username;
            estate_1.default.find({ 'ownerUsername': username }, (err, estates) => {
                if (err)
                    console.log(err);
                else {
                    res.json(estates);
                }
            });
        };
        this.insertEstate = (req, res) => {
            let newEstate = new estate_1.default(req.body);
            newEstate.save().then((estate) => {
                res.json({ 'message': 'estateAdded' });
            }).catch((err) => {
                console.log(err);
                res.json({ 'message': err });
            });
        };
    }
}
exports.estateController = estateController;
//# sourceMappingURL=estate.controller.js.map