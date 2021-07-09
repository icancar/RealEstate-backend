import multer from 'multer';

const storageProfilePhotos = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../RealEstate-frontend/src/assets/users');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const storageEstatePhotos = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../RealEstate-frontend/src/assets/properties');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});



export const uploadProfilePhoto = multer({ storage: storageProfilePhotos });
export const uploadEstatePhotos = multer({ storage: storageEstatePhotos});