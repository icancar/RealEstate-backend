"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadEstatePhotos = exports.uploadProfilePhoto = void 0;
const multer_1 = __importDefault(require("multer"));
const storageProfilePhotos = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../RealEstate-frontend/src/assets/users');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});
const storageEstatePhotos = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../RealEstate-frontend/src/assets/properties');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});
exports.uploadProfilePhoto = multer_1.default({ storage: storageProfilePhotos });
exports.uploadEstatePhotos = multer_1.default({ storage: storageEstatePhotos });
//# sourceMappingURL=multer.js.map