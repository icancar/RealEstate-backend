"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_controller_1 = require("../controllers/upload.controller");
const multer_1 = require("../multer");
const uploadRouter = express_1.default.Router();
uploadRouter.route('/uploadProfilePhoto').post(multer_1.uploadProfilePhoto.single('file'), (req, res, next) => new upload_controller_1.uploadController().uploadProfilePhoto(req, res));
uploadRouter.route('/uploadEstatePhotos').post(multer_1.uploadEstatePhotos.array('files'), (req, res, next) => new upload_controller_1.uploadController().uploadEstatePhotos(req, res));
exports.default = uploadRouter;
//# sourceMappingURL=upload.routes.js.map