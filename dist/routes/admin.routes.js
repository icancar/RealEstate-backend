"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const adminRouter = express_1.default.Router();
adminRouter.route('/getAllRegistrationRequests').get((req, res) => new user_controller_1.userController().getAllRegistrationRequests(req, res));
adminRouter.route('/acceptRegistrationRequest').post((req, res) => new user_controller_1.userController().acceptRegistrationRequest(req, res));
adminRouter.route('/declineRegistrationRequest').post((req, res) => new user_controller_1.userController().declineRegistrationRequest(req, res));
exports.default = adminRouter;
//# sourceMappingURL=admin.routes.js.map