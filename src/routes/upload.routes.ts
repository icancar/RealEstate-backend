import express from 'express';
import { uploadController } from '../controllers/upload.controller';

import { uploadProfilePhoto } from '../multer';
const uploadRouter = express.Router();

uploadRouter.route('/uploadProfilePhoto').post(
    uploadProfilePhoto.single('file'), (req, res, next) => new uploadController().uploadProfilePhoto(req, res)
);




export default uploadRouter;