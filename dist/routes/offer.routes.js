"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const offers_controller_1 = require("../controllers/offers.controller");
const offerRouter = express_1.default.Router();
offerRouter.route("/sendOffer").post((req, res) => new offers_controller_1.offerController().sendOffer(req, res));
offerRouter.route("/getOffersForAdRent").post((req, res) => new offers_controller_1.offerController().getOffersForAdRent(req, res));
offerRouter.route("/getAllAcceptedOffersSale").get((req, res) => new offers_controller_1.offerController().getAllAcceptedOffersSale(req, res));
offerRouter.route("/getAllAcceptedOffersRent").get((req, res) => new offers_controller_1.offerController().getAllAcceptedOffersRent(req, res));
offerRouter.route("/getMyOffersSale").post((req, res) => new offers_controller_1.offerController().getMyOffersSale(req, res));
offerRouter.route("/getMyOffersRent").post((req, res) => new offers_controller_1.offerController().getMyOffersRent(req, res));
offerRouter.route("/acceptOfferSale").post((req, res) => new offers_controller_1.offerController().acceptOfferSale(req, res));
offerRouter.route("/declineOfferSale").post((req, res) => new offers_controller_1.offerController().declineOfferSale(req, res));
exports.default = offerRouter;
//# sourceMappingURL=offer.routes.js.map