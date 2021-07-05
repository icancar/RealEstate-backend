import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../RealEstate-frontend/src/assets/users');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});


export const uploadProfilePhoto = multer({ storage: storage });