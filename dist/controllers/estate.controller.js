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
            estate_1.default.find({ 'approved': true, 'sold': false }, (err, Estate) => {
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
            estate_1.default.find({ 'approved': false, "sold": false }, (err, Estate) => {
                if (err)
                    console.log(err);
                else
                    res.json(Estate);
            });
        };
        this.searchByCity = (req, res) => {
            let city = req.body.cityName;
            estate_1.default.find({ 'approved': true, 'sold': false, 'city': { $regex: city } }, (err, estates) => {
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
            estate_1.default.find({ 'approved': true, 'sold': false, 'price': { $gte: minPrice, $lte: maxPrice } }, (err, estates) => {
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
            estate_1.default.find({ 'approved': true, 'sold': false, 'name': { $regex: cityName }, 'price': { $gte: minPrice, $lte: maxPrice } }, (err, e) => {
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
            estate_1.default.find({}, (err, estates) => {
                if (err)
                    console.log(err);
                else {
                    let id = estates.length + 1;
                    let newEstate = new estate_1.default(req.body);
                    console.log(newEstate);
                    newEstate.set("idAdvertisement", id);
                    newEstate.save().then((ok) => {
                        res.json({ 'message': 'estateAdded' });
                    }).catch((err) => {
                        console.log(err);
                        res.json({ 'message': err });
                    });
                }
            });
        };
        this.getAllEstates = (req, res) => {
            estate_1.default.find({}, (err, Estate) => {
                if (err)
                    console.log(err);
                else
                    res.json(Estate);
            });
        };
        this.promoteEstate = (req, res) => {
            let id = req.body.id;
            estate_1.default.updateOne({ 'idAdvertisement': id }, { $set: { 'promoted': true } }).then((ok) => {
                res.json({ 'message': 'estatePromoted' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.unpromoteEstate = (req, res) => {
            let id = req.body.id;
            estate_1.default.updateOne({ 'idAdvertisement': id }, { $set: { 'promoted': false } }).then((ok) => {
                res.json({ 'message': 'estateUnPromoted' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.getAllPromotedEstates = (req, res) => {
            estate_1.default.find({ 'promoted': true, 'sold': false, 'approved': true }, (err, Estate) => {
                if (err)
                    console.log(err);
                else
                    res.json(Estate);
            });
        };
        this.getEstateViaId = (req, res) => {
            let id = req.body.id;
            estate_1.default.findOne({ 'idAdvertisement': id }, (err, Estate) => {
                if (err)
                    console.log(err);
                else
                    res.json(Estate);
            });
        };
        this.updateEstate = (req, res) => {
            let name = req.body.name;
            let idAdvertisement = req.body.idAdvertisement;
            let municipality = req.body.municipality;
            let city = req.body.city;
            let street = req.body.street;
            let streetNumber = req.body.streetNumber;
            let typeOfAdvertisement = req.body.typeOfAdvertisement;
            let price = req.body.price;
            let size = req.body.size;
            let typeOfEstate = req.body.typeOfEstate;
            let numberOfFloors = req.body.numberOfFloors;
            let floorNumber = req.body.floorNumber;
            let furniture = req.body.furniture;
            let numberOfRooms = req.body.numberOfRooms;
            estate_1.default.updateOne({ "idAdvertisement": idAdvertisement }, { $set: { 'name': name, 'municipality': municipality, 'city': city, 'street': street, 'streetNumber': streetNumber,
                    'typeOfAdvertisement': typeOfAdvertisement, 'price': price, 'size': size, 'typeOfEstate': typeOfEstate, 'numberOfFloors': numberOfFloors,
                    'floorNumber': floorNumber, 'furniture': furniture, 'numberOfRooms': numberOfRooms
                } }).then((ok) => {
                res.json({ 'message': 'estateUpdated' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.updateEstatePhotos = (req, res) => {
            let id = req.body.idAdvertisement;
            let gallery = req.body.gallery;
            estate_1.default.updateOne({ "idAdvertisement": id }, { $set: { 'gallery': gallery } }).then((ok) => {
                res.json({ 'message': 'estatePhotosUpdated' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
    }
}
exports.estateController = estateController;
//# sourceMappingURL=estate.controller.js.map