const bodyParser = require ('body-parser');
const videos = require('./videosRoute.js')
const categorias = require('./categoriasRoute.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        videos,
        categorias
    )
}