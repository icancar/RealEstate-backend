"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
class uploadController {
    constructor() {
        this.uploadProfilePhoto = (req, res) => {
            let file = req.file;
            if (!file) {
                console.log("NO FILE!");
            }
            res.send(file);
        };
    }
}
exports.uploadController = uploadController;
//# sourceMappingURL=upload.controller.js.map