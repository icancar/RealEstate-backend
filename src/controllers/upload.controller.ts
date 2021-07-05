import express from "express"

export class uploadController {
    uploadProfilePhoto = (req: express.Request, res: express.Response) => {
        let file = req.file;
        if (!file) {
            console.log("NO FILE!")
        }
        res.send(file);
    }
}

