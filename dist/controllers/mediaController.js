"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaById = exports.createMediaItem = exports.getMediaItems = void 0;
const mediasORM_1 = require("../data/mediasORM");
const MEDIA_ITEMS = mediasORM_1.MediasORM.getMediaItems();
const getMediaItems = (req, res) => {
    res.status(200).send(MEDIA_ITEMS);
};
exports.getMediaItems = getMediaItems;
const createMediaItem = (req, res) => {
    const media = req.body.mediaToUpload;
    MEDIA_ITEMS.push(media);
    //Persistent storage of media items
    mediasORM_1.MediasORM.storeMediaItem(media);
    res.status(200).send({
        message: "Media item created successfully",
    });
};
exports.createMediaItem = createMediaItem;
const getMediaById = (req, res) => {
    const mediaId = req.params.id;
    const media = MEDIA_ITEMS.find((media) => media.id === mediaId);
    if (media) {
        res.status(200).send(media);
    }
    else {
        res.status(404).send("Media not found");
    }
};
exports.getMediaById = getMediaById;
