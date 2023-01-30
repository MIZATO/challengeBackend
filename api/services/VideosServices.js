const Services = require('./Services.js')
const database = require('../models')
const { Op, QueryTypes } = require("sequelize");
const videos = require('../models/videos.js');

class VideosServices extends Services {
  constructor() {
    super('Videos')
    this.categorias = new Services('Categorias')
  }

  async queryVideosCategoria(categoria) {
    return await database[this.nameModel]
      .findAll({
        where: {
          categoriaId: categoria
        }
      })
  }

  async queryVideosName(titulo) {
    return await database[this.nameModel]
      .findAll({
        where: {
          [Op.or]: [
           { titulo:{[Op.like]: '%' + titulo + '%'}}
          ]
        }
      })
  }

  async getRecordFree() {
    return await database[this.nameModel]
      .findAll({
        where: {
          [Op.or]: [
            {id: 1}, {id: 2},{id: 3}
          ]
        }
        });
}
}
module.exports = VideosServices;