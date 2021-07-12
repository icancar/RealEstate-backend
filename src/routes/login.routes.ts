import express from 'express';
import { registerController } from '../controllers/register.controller';
import { loginController } from '../controllers/login.controller';
import { userController } from '../controllers/user.controller';
const loginRouter = express.Router();

loginRouter.route('/login').post(
    (req, res)=>new loginController().login(req, res)
);

loginRouter.route('/register').post(
    (req, res)=>new registerController().register(req, res)
);
loginRouter.route('/changePassword').post(
    (req,res)=> new registerController().changePassword(req,res)
);

loginRouter.route('/editUserInfo').post(
    (req,res)=> new userController().editUserInfo(req,res)
);

loginRouter.route('/updateProfilePhoto').post(
    (req,res)=> new userController().updateProfilePhoto(req,res)

    
)

loginRouter.route('/getUserFromUsername').post(
    (req,res)=> new userController().getUserFromUsername(req,res)

    
)

loginRouter.route('/getAllUsers').get(
    (req,res)=> new userController().getAllUsers(req,res)
)

loginRouter.route('/deleteUser').post(
    (req,res)=> new userController().deleteUser(req,res)
 
)


export default loginRouter;