import express from 'express';
import { uploadController } from '../controllers/upload.controller';

import { uploadEstatePhotos, uploadProfilePhoto } from '../multer';
const uploadRouter = express.Router();

uploadRouter.route('/uploadProfilePhoto').post(
    uploadProfilePhoto.single('file'), (req, res, next) => new uploadController().uploadProfilePhoto(req, res)
);

uploadRouter.route('/uploadEstatePhotos').post(
    uploadEstatePhotos.array('files'), (req, res, next) => new uploadController().uploadEstatePhotos(req, res)
);






export default uploadRouter;