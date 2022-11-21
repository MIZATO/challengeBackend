const Services = require('./Services.js')
const database = require('../models')

class CategoriasServices extends Services {
    constructor() {
        super('Categorias')
    }
}

module.exports = CategoriasServices;