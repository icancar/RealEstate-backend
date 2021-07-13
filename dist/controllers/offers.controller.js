"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerController = void 0;
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
                offer_1.default.deleteMany({ "idAdvertisement": idAdvertisement, "offerFrom": offerFrom, "offerTo": offerTo, "status": "waiting" }).then((ok) => {
                    res.json({ "message": "offerAccepted" });
                }).catch((err) => {
                    res.json({ "message": err });
                });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.declineOfferSale = (req, res) => {
            let idOffer = req.body.idOffer;
            offer_1.default.deleteOne({ "idOffer": idOffer }).then((ok) => {
                res.json({ "message": "offerDeclined" });
            }).catch((err) => {
                res.json({ "message": err });
            });
        };
    }
}
exports.offerController = offerController;
//# sourceMappingURL=offers.controller.js.map