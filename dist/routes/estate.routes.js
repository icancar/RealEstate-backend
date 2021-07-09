"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const estate_controller_1 = require("../controllers/estate.controller");
const estateRouter = express_1.default.Router();
estateRouter.route('/getAllApprovedEstates').get((req, res) => new estate_controller_1.estateController().getAllApprovedEstates(req, res));
estateRouter.route('/getAllEstatesRequest').get((req, res) => new estate_controller_1.estateController().getAllEstatesRequest(req, res));
estateRouter.route('/acceptRequest').post((req, res) => new estate_controller_1.estateController().acceptEstateRequest(req, res));
estateRouter.route('/declineRequest').post((req, res) => new estate_controller_1.estateController().declineEstateRequest(req, res));
estateRouter.route('/searchByCity').post((req, res) => new estate_controller_1.estateController().searchByCity(req, res));
estateRouter.route('/searchByPrice').post((req, res) => new estate_controller_1.estateController().searchByPrice(req, res));
estateRouter.route('/searchByPriceAndCity').post((req, res) => new estate_controller_1.estateController().searchByPriceAndCity(req, res));
estateRouter.route('/getMyEstates').post((req, res) => new estate_controller_1.estateController().getAllEstatesForUser(req, res));
estateRouter.route('/insertEstate').post((req, res) => new estate_controller_1.estateController().insertEstate(req, res));
exports.default = estateRouter;
//# sourceMappingURL=estate.routes.js.map