const videos = require('../models/videos');
const { VideosServices } = require('../services');
const videosServices = new VideosServices();

class VideoController {
    static async getAllVideos(req, res) {
        try {
            const allVideos = await videosServices.getAllRecords();
            return res.status(200).json(allVideos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getVideo(req, res) {
        const { id } = req.params;
        try {
            const video = await videosServices.getRecord({ id });
            return res.status(200).json(video);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

        static async getVideoName(req, res) {
            const { titulo } = req.params;
            try {
                const videos = await videosServices.queryVideosName(titulo)
                return res.status(200).json(videos);
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

    static async createVideo(req, res) {
        const newVideo = req.body;
        try {
            const newVideoCreate = await videosServices.createRecord(newVideo);
            return res.status(200).json(newVideoCreate)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateVideo(req, res) {
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await videosServices.updateRecord(newInfo, Number(id));
            return res.status(200).json({ message: `Video com id${id} atualizado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteVideo(req, res) {
        const { id } = req.params;
        try {
            await videosServices.deleteRecord(Number(id));
            return res.status(200).json({ message: `Video com o id:${id} foi deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async repairVideo(req, res) {
        const { id } = req.params;
        try {
            const recordRepair = await videosServices.repairRecord(Number(id));
            return res.status(200).json(recordRepair);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getVideoOut(req, res) {
        const { id } = req.params;
        try {
            const video = await videosServices.queryRecordOut({ id });
            return res.status(200).json(video);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async queryVideosByCategoria(req, res) {
        const { categoriaId } = req.params;
        try {
            const videos = await videosServices.queryVideosCategoria(Number(categoriaId))
            return res.status(200).json(videos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = VideoController;