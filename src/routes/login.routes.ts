import express from 'express';
import { registerController } from '../controllers/register.controller';
import { loginController } from '../controllers/login.controller';
const loginRouter = express.Router();

loginRouter.route('/login').post(
    (req, res)=>new loginController().login(req, res)
);

loginRouter.route('/register').post(
    (req, res)=>new registerController().register(req, res)
);

export default loginRouter;