import express from 'express';
import Fee from '../models/fee';

export class feeController{
    getFee = (req: express.Request, res: express.Response)=>{ 
        let username=req.body.username;
        Fee.findOne({'admin':username},
            (err, fee)=>{
                if(err) console.log(err);
                else res.json(fee);
            })
    }

    updateFee = (req: express.Request, res: express.Response)=>{
        let username=req.body.username;
        let prodaja=req.body.prodaja;
        let iznajmljivanje=req.body.iznajmljivanje;

        Fee.updateOne({"admin":username}, {$set:{'prodaja':prodaja, 'iznajmljivanje':iznajmljivanje}}).then((ok)=>{
            res.json({"message":"feeUpdated"});
        }).catch((err)=>{
            res.json({"message":err});
        })
    }
}