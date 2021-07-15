import express from 'express';
import Estate from '../models/estate';

export class estateController{
    getAllApprovedEstates = (req: express.Request, res: express.Response)=>{ 
        Estate.find({'approved':true, 'sold':false},
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
        Estate.find({'approved':false, "sold":false},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }


    searchByCity = (req: express.Request, res: express.Response) =>{
        let city=req.body.cityName;

        Estate.find({'approved':true,'sold':false,'city':{$regex:city}},(err, estates)=>{
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

        Estate.find({'approved':true,'sold':false, 'price': {$gte:minPrice,$lte:maxPrice}},(err, estates) => {
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

        Estate.find({'approved':true,'sold':false,'name':{$regex:cityName},'price': {$gte:minPrice,$lte:maxPrice}}, (err, e)=>{
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
                console.log(newEstate);
                newEstate.set("idAdvertisement", id);
                newEstate.save().then((ok)=>{
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
        Estate.find({'promoted':true, 'sold':false, 'approved':true},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }

    getEstateViaId= (req: express.Request, res: express.Response) =>{
        let id=req.body.id;
        Estate.findOne({'idAdvertisement':id},
            (err, Estate)=>{
                if(err) console.log(err);
                else res.json(Estate);
            })
    }

    updateEstate =  (req: express.Request, res: express.Response) =>{
        let name=req.body.name;
        let idAdvertisement=req.body.idAdvertisement;
        let municipality=req.body.municipality;
        let city=req.body.city;
        let street=req.body.street;
        let streetNumber=req.body.streetNumber;
        let typeOfAdvertisement=req.body.typeOfAdvertisement;
        let price=req.body.price;
        let size=req.body.size;
        let typeOfEstate=req.body.typeOfEstate;
        let numberOfFloors=req.body.numberOfFloors;
        let floorNumber=req.body.floorNumber;
        let furniture=req.body.furniture;
        let numberOfRooms=req.body.numberOfRooms

        Estate.updateOne({"idAdvertisement":idAdvertisement}, {$set:{'name':name, 'municipality':municipality, 'city':city, 'street':street, 'streetNumber':streetNumber,
         'typeOfAdvertisement':typeOfAdvertisement, 'price':price, 'size':size, 'typeOfEstate':typeOfEstate,'numberOfFloors':numberOfFloors,
        'floorNumber':floorNumber,'furniture':furniture, 'numberOfRooms':numberOfRooms
    }}).then((ok)=>{
        res.json({'message':'estateUpdated'});
    }).catch((err)=>{
        res.json({'message': err});
    })
    }

    updateEstatePhotos=  (req: express.Request, res: express.Response) =>{
        let id=req.body.idAdvertisement;
        let gallery=req.body.gallery;

        Estate.updateOne({"idAdvertisement":id}, {$set:{'gallery':gallery}}).then((ok)=>{
            res.json({'message':'estatePhotosUpdated'});
        }).catch((err)=>{
            res.json({'message':err})
        })
    }
}