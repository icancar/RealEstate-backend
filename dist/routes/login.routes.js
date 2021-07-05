"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_controller_1 = require("../controllers/register.controller");
const login_controller_1 = require("../controllers/login.controller");
const loginRouter = express_1.default.Router();
loginRouter.route('/login').post((req, res) => new login_controller_1.loginController().login(req, res));
loginRouter.route('/register').post((req, res) => new register_controller_1.registerController().register(req, res));
exports.default = loginRouter;
//# sourceMappingURL=login.routes.js.map