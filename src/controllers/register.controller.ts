import express from 'express';
import User from '../models/user';

export class registerController{
    register = (req: express.Request, res: express.Response)=>{
        let newUser=new User(req.body);
        
        User.findOne({'username':req.body.username}, (err, u)=>{
            if(u){ //postoji neko sa takvim username
                res.json({ 'message': 'usernameExists' });
            }else {//ne postoji niko sa takvim username
                User.findOne({'email':req.body.email}, (err, u1)=>{
                    if(u1){ //email zauzet
                        res.json({'message': 'emailExists'})
                    }else { //email slobodan
                        newUser.save().then((user)=>{
                            res.json({'message': 'userAdded'})
                        }).catch((err)=>{
                            res.json({'message': err})
                        })
                    }
                })
            }
        })
        
    }
}