import express from 'express';
import { userController } from '../controllers/user.controller';
const adminRouter = express.Router();

adminRouter.route('/getAllRegistrationRequests').get(
    (req, res)=>new userController().getAllRegistrationRequests(req, res)
);

adminRouter.route('/acceptRegistrationRequest').post(
    (req, res)=>new userController().acceptRegistrationRequest(req, res)
)
adminRouter.route('/declineRegistrationRequest').post(
    (req, res)=>new userController().declineRegistrationRequest(req, res)
)




export default adminRouter;