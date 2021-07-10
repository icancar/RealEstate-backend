import express from 'express';
import Estate from '../models/estate';

export class estateController{
    getAllApprovedEstates = (req: express.Request, res: express.Response)=>{ 
        Estate.find({'approved':true},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }

    acceptEstateRequest = (req: express.Request, res: express.Response) =>{
        let id=req.body.id;

        Estate.updateOne({'idAdvertisement':id},{$set:{'approved':true}}).then((ok)=>{
            res.json({ 'message': 'requestAccepted' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }

    declineEstateRequest  = (req: express.Request, res: express.Response) => {
        let id=req.body.id;

        Estate.deleteOne({'idAdvertisement':id}).then((ok)=>{
            res.json({ 'message': 'requestDeclined' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }

    getAllEstatesRequest  = (req: express.Request, res: express.Response) =>{
        Estate.find({'approved':false},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }


    searchByCity = (req: express.Request, res: express.Response) =>{
        let city=req.body.cityName;

        Estate.find({'approved':true,'name':{$regex:city}},(err, estates)=>{
            if(err) console.log(err);
            else {
                res.json(estates);
            }
        })
    }

    searchByPrice = (req: express.Request, res: express.Response) =>{
        let minPrice=req.body.priceMin;
        let maxPrice=req.body.priceMax;
        console.log(minPrice);
        console.log(maxPrice);

        Estate.find({'approved':true, 'price': {$gte:minPrice,$lte:maxPrice}},(err, estates) => {
            if (err) console.log(err);
            else {
                res.json(estates);
            }
        })
    }

    searchByPriceAndCity = (req: express.Request, res: express.Response) =>{
        let minPrice=req.body.priceMin;
        let maxPrice=req.body.priceMax;
        let cityName=req.body.cityName;

        Estate.find({'approved':true,'name':{$regex:cityName},'price': {$gte:minPrice,$lte:maxPrice}}, (err, e)=>{
            if(err) console.log(err);
            else {
                res.json(e);
            }
        })
    }

    getAllEstatesForUser = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;

        Estate.find({'ownerUsername':username},(err, estates)=>{
            if(err) console.log(err);
            else {
                res.json(estates);
            }
        })
    }

    insertEstate = (req: express.Request, res: express.Response) =>{
        Estate.find({}, (err, estates)=>{
            if(err) console.log(err);
            else {
                let id=estates.length+1;
                let newEstate=new Estate(req.body);
                newEstate.set("idAdvertisement", id);
                newEstate.save().then((estate)=>{
                    res.json({'message':'estateAdded'})
                }).catch((err)=>{
                    console.log(err);
                    res.json({'message':err})
                })
            }
        })
    }
        
    getAllEstates  = (req: express.Request, res: express.Response) =>{
        Estate.find({},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }

    promoteEstate = (req: express.Request, res: express.Response) =>{
        let id=req.body.id;

        Estate.updateOne({'idAdvertisement':id},{$set:{'promoted':true}}).then((ok)=>{
            res.json({ 'message': 'estatePromoted' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }

    unpromoteEstate = (req: express.Request, res: express.Response) =>{
        let id=req.body.id;

        Estate.updateOne({'idAdvertisement':id},{$set:{'promoted':false}}).then((ok)=>{
            res.json({ 'message': 'estateUnPromoted' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }

    getAllPromotedEstates  = (req: express.Request, res: express.Response) =>{
        Estate.find({'promoted':true},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }
}