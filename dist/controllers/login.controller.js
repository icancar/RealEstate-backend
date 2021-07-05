"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const user_1 = __importDefault(require("../models/user"));
class loginController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, User) => {
                if (err)
                    console.log(err);
                else
                    res.json(User);
            });
        };
    }
}
exports.loginController = loginController;
//# sourceMappingURL=login.controller.js.map