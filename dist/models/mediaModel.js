"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
class Media {
    constructor(id, title, description, duration, tags, filedata, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.tags = tags;
        this.filedata = Object.assign({}, filedata);
        this.thumbnail = Object.assign(Object.assign({}, thumbnail), { thumbnailroute: process.env.THUMBNAIL_ROUTE + thumbnail.filename });
        this.mediaroute = process.env.MEDIA_ROUTE + filedata.filename;
    }
}
exports.Media = Media;
