import express from 'express';
import Estate from '../models/estate';
import Offer from '../models/offer';

export class offerController{
    

    sendOffer=  (req: express.Request, res: express.Response) =>{
        let idAdvertisement=req.body.idAdvertisement;
        Offer.find({"idAdvertisement":idAdvertisement}, (err, offers)=>{
            if(err) console.log(err);
            else {
                let id=offers.length+1;
                let o = new Offer(req.body);
                let idO=idAdvertisement+"-"+id;
                o.set('idOffer',idO )
                o.save().then((ok)=>{
                res.json({"message":"offerSent"})
                 }).catch((err)=>{
                     res.json({"message":err});
                 })
            }
        })
    }

    getOffersForAdRent = (req: express.Request, res: express.Response) =>{
        let idAdvertisement= req.body.idAdvertisement;

        Offer.find({"idAdvertisement":idAdvertisement, "accepted":true},
        (err, offers)=>{
            if(err) console.log(err);
            else {
                res.json(offers);
            }
        })
    }

    getAllAcceptedOffersSale = (req: express.Request, res: express.Response) =>{
        Offer.find({"accepted":true,"typeOfOffer":"prodaja"},(err, offers)=>{
            if(err) console.log(err);
            else {
                res.json(offers);
            }
        })
    }

    getAllAcceptedOffersRent = (req: express.Request, res: express.Response) =>{
        Offer.find({"accepted":true,"typeOfOffer":"iznajmljivanje"},(err, offers)=>{
            if(err) console.log(err);
            else {
                res.json(offers);
            }
        })
    }

    getMyOffersSale = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        Offer.find({"offerTo":username,"typeOfOffer":"prodaja", "status":"waiting"},(err, offers)=>{
            if(err) console.log(err);
            else {
                res.json(offers);
            }
        })
    }

    getMyOffersRent = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        Offer.find({"offerTo":username,"typeOfOffer":"iznajmljivanje", "status":"waiting"},(err, offers)=>{
            if(err) console.log(err);
            else {
                res.json(offers);
            }
        })
    }

    acceptOfferSale = (req: express.Request, res: express.Response) =>{
        let idOffer=req.body.idOffer;
        let idAdvertisement=req.body.idAdvertisement;
        let offerFrom=req.body.offerFrom;
        let offerTo=req.body.offerTo;

        //prihvatanje ponude
        Offer.updateOne({"idOffer":idOffer}, {$set:{"status":"finished", "accepted":true}}).then((ok)=>{
            //odbijanje svih ostalih, tj brisanje iz baze
        Offer.updateMany({"idAdvertisement":idAdvertisement, "offerFrom":offerFrom, "offerTo":offerTo, "status":"waiting"}, {$set:{"status":"declined", "accepted":false}}).then((ok)=>{
           
            Estate.updateOne({"idAdvertisement":idAdvertisement}, {$set:{"sold":true}}).then((ok)=>{
                res.json({"message":"offerAccepted"});
            }).catch((err)=>{
                res.json({"message":err});
            })
        }).catch((err)=>{
            res.json({"message":err});
        })
        }).catch((err)=>{
            res.json({'message': err})
        })

       
    }

    declineOfferSale =(req: express.Request, res: express.Response) =>{
        let idOffer=req.body.idOffer;
        Offer.updateOne({"idOffer":idOffer}, {$set:{"accepted":false, "status":"declined"}}).then((ok)=>{
            res.json({"message":"offerDeclined"});
        }).catch((err)=>{
            res.json({"message":err});
        })

        
    }

    acceptOfferRent = (req: express.Request, res: express.Response) =>{
        let idOffer=req.body.idOffer;
        let idAdvertisement=req.body.idAdvertisement;
        let offerFrom=req.body.offerFrom;
        let offerTo=req.body.offerTo;
        let date1=req.body.date1;
        let date2=req.body.date2;

        Offer.updateOne({"idOffer":idOffer}, {$set:{"status":"accepted","accepted":true }}).then((ok)=>{
            Offer.updateMany({"idAdvertisement":idAdvertisement,"status":"waiting", "offerFrom":offerFrom, "offerTo":offerTo, $or:[{"date1":{$gte:date1, $lte:date2}},{"date1":{$gte:date1}, "date2":{$lte:date2}},{"date1":{$lte:date1}, "date2":{$gte:date2}},{"date2":{$gte:date1, $lte:date2}}]}, {$set:{"status":"declined", "accepted":false}}).then((ok)=>{
                res.json({"message":"offerAccepted"})
            })
        }).catch((err)=>{
            res.json({"message":err});
        })
    }

}