import express from 'express';
import { offerController } from '../controllers/offers.controller';

const offerRouter = express.Router();

offerRouter.route("/sendOffer").post(
    (req,res)=> new offerController().sendOffer(req,res)
 
)

offerRouter.route("/getOffersForAdRent").post(
    (req,res)=> new offerController().getOffersForAdRent(req,res)
 
)
offerRouter.route("/getAllAcceptedOffersSale").get(
    (req,res)=> new offerController().getAllAcceptedOffersSale(req,res)
 
)
offerRouter.route("/getAllAcceptedOffersRent").get(
    (req,res)=> new offerController().getAllAcceptedOffersRent(req,res)
 
)
offerRouter.route("/getMyOffersSale").post(
    (req,res)=> new offerController().getMyOffersSale(req,res)
 
)
offerRouter.route("/getMyOffersRent").post(
    (req,res)=> new offerController().getMyOffersRent(req,res)
 
)
offerRouter.route("/acceptOfferSale").post(
    (req,res)=> new offerController().acceptOfferSale(req,res)
 
)
offerRouter.route("/declineOfferSale").post(
    (req,res)=> new offerController().declineOfferSale(req,res)
 
)


export default offerRouter;