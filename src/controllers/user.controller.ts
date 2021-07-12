import express from 'express';
import User from '../models/user';

export class userController{
    getAllRegistrationRequests = (req: express.Request, res: express.Response)=>{
        User.find({'accepted':false},(err, User)=>{
                if(err) console.log(err);
                else res.json(User);
            })
    }

    acceptRegistrationRequest = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        User.updateOne({'username':username},{$set:{'accepted':true}}).then((ok)=>{
            res.json({ 'message': 'userAccepted' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }

    declineRegistrationRequest = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        User.deleteOne({'username':username}).then((ok)=>{
            res.json({ 'message': 'userDeclined' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }

    editUserInfo= (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        let name=req.body.name;
        let surname=req.body.surname;
        let city=req.body.city;
        let country=req.body.country;

        User.updateOne({'username': username}, {$set:{'ime':name, 'prezime':surname, 'city':city, 'country':country}}).then((ok)=>{
            res.json({'message':'userUpdated'});
        }).catch((err)=>{
            res.json({'message': err});
        })
    }

    updateProfilePhoto= (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        let path=req.body.path;
    

        User.updateOne({'username': username}, {$set:{'picture':path}}).then((ok)=>{
            res.json({'message':'profilePhotoUpdated'});
        }).catch((err)=>{
            res.json({'message': err});
        })
    }

    getUserFromUsername= (req: express.Request, res: express.Response) =>{
        let username=req.body.username;

        User.findOne({'username':username}, (err, user)=>{
            if(err) console.log(err);
            else {
                res.json(user)
            }
        })
    }

    getAllUsers = (req: express.Request, res: express.Response)=>{
        User.find({},(err, User)=>{
                if(err) console.log(err);
                else res.json(User);
            })
    }

    deleteUser = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        User.deleteOne({'username':username, 'accepted':true}).then((ok)=>{
            res.json({ 'message': 'userDeleted' });
        }).catch((err)=>{
            res.json({'message': err})
        })
    }
    
}