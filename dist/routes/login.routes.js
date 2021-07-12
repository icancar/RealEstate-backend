"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_controller_1 = require("../controllers/register.controller");
const login_controller_1 = require("../controllers/login.controller");
const user_controller_1 = require("../controllers/user.controller");
const loginRouter = express_1.default.Router();
loginRouter.route('/login').post((req, res) => new login_controller_1.loginController().login(req, res));
loginRouter.route('/register').post((req, res) => new register_controller_1.registerController().register(req, res));
loginRouter.route('/changePassword').post((req, res) => new register_controller_1.registerController().changePassword(req, res));
loginRouter.route('/editUserInfo').post((req, res) => new user_controller_1.userController().editUserInfo(req, res));
loginRouter.route('/updateProfilePhoto').post((req, res) => new user_controller_1.userController().updateProfilePhoto(req, res));
loginRouter.route('/getUserFromUsername').post((req, res) => new user_controller_1.userController().getUserFromUsername(req, res));
loginRouter.route('/getAllUsers').get((req, res) => new user_controller_1.userController().getAllUsers(req, res));
loginRouter.route('/deleteUser').post((req, res) => new user_controller_1.userController().deleteUser(req, res));
exports.default = loginRouter;
//# sourceMappingURL=login.routes.js.map