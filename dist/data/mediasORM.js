"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasORM = void 0;
const mediaModel_1 = require("../models/mediaModel");
const medias_json_1 = __importDefault(require("./medias.json"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
class MediasORM {
    static getMediaItems() {
        const mediaItems = new Array();
        medias_json_1.default.forEach((element) => {
            mediaItems.push(new mediaModel_1.Media(element.id, element.title, element.description, element.duration, element.tags, element.filedata, element.thumbnail));
        });
        return mediaItems;
    }
    static storeMediaItem(media) {
        //Aqui lo guardariamos en una base de datos pej. SQL mediante el comando INSERT INTO o utilizando un ORM como TypeORM
        //En este caso, como estamos utilizando un JSON, lo guardamos en el JSON
        const mediaItems = this.getMediaItems();
        mediaItems.push(media);
        fs_1.default.writeFileSync("./src/data/medias.json", JSON.stringify(mediaItems));
    }
}
exports.MediasORM = MediasORM;
