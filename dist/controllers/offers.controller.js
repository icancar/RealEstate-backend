"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerController = void 0;
const estate_1 = __importDefault(require("../models/estate"));
const offer_1 = __importDefault(require("../models/offer"));
class offerController {
    constructor() {
        this.sendOffer = (req, res) => {
            let idAdvertisement = req.body.idAdvertisement;
            offer_1.default.find({ "idAdvertisement": idAdvertisement }, (err, offers) => {
                if (err)
                    console.log(err);
                else {
                    let id = offers.length + 1;
                    let o = new offer_1.default(req.body);
                    let idO = idAdvertisement + "-" + id;
                    o.set('idOffer', idO);
                    o.save().then((ok) => {
                        res.json({ "message": "offerSent" });
                    }).catch((err) => {
                        res.json({ "message": err });
                    });
                }
            });
        };
        this.getOffersForAdRent = (req, res) => {
            let idAdvertisement = req.body.idAdvertisement;
            offer_1.default.find({ "idAdvertisement": idAdvertisement, "accepted": true }, (err, offers) => {
                if (err)
                    console.log(err);
                else {
                    res.json(offers);
                }
            });
        };
        this.getAllAcceptedOffersSale = (req, res) => {
            offer_1.default.find({ "accepted": true, "typeOfOffer": "prodaja" }, (err, offers) => {
                if (err)
                    console.log(err);
                else {
                    res.json(offers);
                }
            });
        };
        this.getAllAcceptedOffersRent = (req, res) => {
            offer_1.default.find({ "accepted": true, "typeOfOffer": "iznajmljivanje" }, (err, offers) => {
                if (err)
                    console.log(err);
                else {
                    res.json(offers);
                }
            });
        };
        this.getMyOffersSale = (req, res) => {
            let username = req.body.username;
            offer_1.default.find({ "offerTo": username, "typeOfOffer": "prodaja", "status": "waiting" }, (err, offers) => {
                if (err)
                    console.log(err);
                else {
                    res.json(offers);
                }
            });
        };
        this.getMyOffersRent = (req, res) => {
            let username = req.body.username;
            offer_1.default.find({ "offerTo": username, "typeOfOffer": "iznajmljivanje", "status": "waiting" }, (err, offers) => {
                if (err)
                    console.log(err);
                else {
                    res.json(offers);
                }
            });
        };
        this.acceptOfferSale = (req, res) => {
            let idOffer = req.body.idOffer;
            let idAdvertisement = req.body.idAdvertisement;
            let offerFrom = req.body.offerFrom;
            let offerTo = req.body.offerTo;
            //prihvatanje ponude
            offer_1.default.updateOne({ "idOffer": idOffer }, { $set: { "status": "finished", "accepted": true } }).then((ok) => {
                //odbijanje svih ostalih, tj brisanje iz baze
                offer_1.default.updateMany({ "idAdvertisement": idAdvertisement, "offerFrom": offerFrom, "offerTo": offerTo, "status": "waiting" }, { $set: { "status": "declined", "accepted": false } }).then((ok) => {
                    estate_1.default.updateOne({ "idAdvertisement": idAdvertisement }, { $set: { "sold": true } }).then((ok) => {
                        res.json({ "message": "offerAccepted" });
                    }).catch((err) => {
                        res.json({ "message": err });
                    });
                }).catch((err) => {
                    res.json({ "message": err });
                });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.declineOfferSale = (req, res) => {
            let idOffer = req.body.idOffer;
            offer_1.default.updateOne({ "idOffer": idOffer }, { $set: { "accepted": false, "status": "declined" } }).then((ok) => {
                res.json({ "message": "offerDeclined" });
            }).catch((err) => {
                res.json({ "message": err });
            });
        };
        this.acceptOfferRent = (req, res) => {
            let idOffer = req.body.idOffer;
            let idAdvertisement = req.body.idAdvertisement;
            let offerFrom = req.body.offerFrom;
            let offerTo = req.body.offerTo;
            let date1 = req.body.date1;
            let date2 = req.body.date2;
            offer_1.default.updateOne({ "idOffer": idOffer }, { $set: { "status": "accepted", "accepted": true } }).then((ok) => {
                offer_1.default.updateMany({ "idAdvertisement": idAdvertisement, "status": "waiting", "offerFrom": offerFrom, "offerTo": offerTo, $or: [{ "date1": { $gte: date1, $lte: date2 } }, { "date1": { $gte: date1 }, "date2": { $lte: date2 } }, { "date1": { $lte: date1 }, "date2": { $gte: date2 } }, { "date2": { $gte: date1, $lte: date2 } }] }, { $set: { "status": "declined", "accepted": false } }).then((ok) => {
                    res.json({ "message": "offerAccepted" });
                });
            }).catch((err) => {
                res.json({ "message": err });
            });
        };
    }
}
exports.offerController = offerController;
//# sourceMappingURL=offers.controller.js.map