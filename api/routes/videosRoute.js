const { Router } = require('express');
const VideoController =require('../controllers/VideoController.js');
const CategoriaController = require('../controllers/CategoriaController.js')

const router = Router()
router
  .get('/videos', VideoController.getAllVideos)
  .get('/videos/free', VideoController.videosFree)
  .get('/videos/:id', VideoController.getVideo)
  .get('/videos/search=/:titulo', VideoController.getVideoName)
  .get('/categorias/:categoriaId/videos', VideoController.queryVideosByCategoria)
  .post('/videos', VideoController.createVideo)  
  .put('/videos/:id', VideoController.updateVideo)  
  .delete('/videos/:id', VideoController.deleteVideo )  

module.exports = router;