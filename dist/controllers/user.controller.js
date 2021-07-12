"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = __importDefault(require("../models/user"));
class userController {
    constructor() {
        this.getAllRegistrationRequests = (req, res) => {
            user_1.default.find({ 'accepted': false }, (err, User) => {
                if (err)
                    console.log(err);
                else
                    res.json(User);
            });
        };
        this.acceptRegistrationRequest = (req, res) => {
            let username = req.body.username;
            user_1.default.updateOne({ 'username': username }, { $set: { 'accepted': true } }).then((ok) => {
                res.json({ 'message': 'userAccepted' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.declineRegistrationRequest = (req, res) => {
            let username = req.body.username;
            user_1.default.deleteOne({ 'username': username }).then((ok) => {
                res.json({ 'message': 'userDeclined' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.editUserInfo = (req, res) => {
            let username = req.body.username;
            let name = req.body.name;
            let surname = req.body.surname;
            let city = req.body.city;
            let country = req.body.country;
            user_1.default.updateOne({ 'username': username }, { $set: { 'ime': name, 'prezime': surname, 'city': city, 'country': country } }).then((ok) => {
                res.json({ 'message': 'userUpdated' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.updateProfilePhoto = (req, res) => {
            let username = req.body.username;
            let path = req.body.path;
            user_1.default.updateOne({ 'username': username }, { $set: { 'picture': path } }).then((ok) => {
                res.json({ 'message': 'profilePhotoUpdated' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
        this.getUserFromUsername = (req, res) => {
            let username = req.body.username;
            user_1.default.findOne({ 'username': username }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    res.json(user);
                }
            });
        };
        this.getAllUsers = (req, res) => {
            user_1.default.find({}, (err, User) => {
                if (err)
                    console.log(err);
                else
                    res.json(User);
            });
        };
        this.deleteUser = (req, res) => {
            let username = req.body.username;
            user_1.default.deleteOne({ 'username': username, 'accepted': true }).then((ok) => {
                res.json({ 'message': 'userDeleted' });
            }).catch((err) => {
                res.json({ 'message': err });
            });
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map