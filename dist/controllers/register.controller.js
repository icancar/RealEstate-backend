"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const user_1 = __importDefault(require("../models/user"));
class registerController {
    constructor() {
        this.register = (req, res) => {
            let newUser = new user_1.default(req.body);
            user_1.default.findOne({ 'username': req.body.username }, (err, u) => {
                if (u) { //postoji neko sa takvim username
                    res.json({ 'message': 'usernameExists' });
                }
                else { //ne postoji niko sa takvim username
                    user_1.default.findOne({ 'email': req.body.email }, (err, u1) => {
                        if (u1) { //email zauzet
                            res.json({ 'message': 'emailExists' });
                        }
                        else { //email slobodan
                            newUser.save().then((user) => {
                                res.json({ 'message': 'userAdded' });
                            }).catch((err) => {
                                res.json({ 'message': err });
                            });
                        }
                    });
                }
            });
        };
    }
}
exports.registerController = registerController;
//# sourceMappingURL=register.controller.js.map