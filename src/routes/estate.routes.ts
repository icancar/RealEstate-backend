import express from 'express';
import { feeController } from '../controllers/fee.controller';
import { estateController } from '../controllers/estate.controller';
const estateRouter = express.Router();

estateRouter.route('/getAllApprovedEstates').get(
    (req, res)=>new estateController().getAllApprovedEstates(req, res)
);
estateRouter.route('/getAllEstatesRequest').get(
    (req,res)=>new estateController().getAllEstatesRequest(req,res)
);


estateRouter.route('/acceptRequest').post(
    (req,res)=>new estateController().acceptEstateRequest(req,res)
);

estateRouter.route('/declineRequest').post(
    (req,res)=>new estateController().declineEstateRequest(req,res)
);

estateRouter.route('/searchByCity').post(
    (req,res)=>new estateController().searchByCity(req,res)
);

estateRouter.route('/searchByPrice').post(
    (req,res)=>new estateController().searchByPrice(req,res)
);
estateRouter.route('/searchByPriceAndCity').post(
    (req,res)=>new estateController().searchByPriceAndCity(req,res)
);

estateRouter.route('/getMyEstates').post(
    (req,res)=>new estateController().getAllEstatesForUser(req,res)
)
estateRouter.route('/insertEstate').post(
    (req,res)=>new estateController().insertEstate(req,res)
)
estateRouter.route('/getAllEstates').get(
   (req,res)=>new estateController().getAllEstates(req,res)
)
estateRouter.route('/promoteEstate').post(
    (req,res)=>new estateController().promoteEstate(req,res)
)
estateRouter.route('/unpromoteEstate').post(
    (req,res)=>new estateController().unpromoteEstate(req,res)
)
estateRouter.route('/getAllPromotedEstates').get(
    (req,res)=>new estateController().getAllPromotedEstates(req,res)
)

estateRouter.route('/getEstateViaId').post(
    (req,res)=>new estateController().getEstateViaId(req,res)
)

estateRouter.route('/updateEstate').post(
    (req,res)=>new estateController().updateEstate(req,res)
)

estateRouter.route('/updateEstatePhotos').post(
    (req,res)=>new estateController().updateEstatePhotos(req,res)
)

estateRouter.route('/updateFee').post(
    (req,res)=>new feeController().updateFee(req,res)
)

estateRouter.route('/getFee').post(
    (req,res)=>new feeController().getFee(req,res)
)


export default estateRouter;