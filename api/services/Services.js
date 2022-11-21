const database = require('../models')

class Services {
    constructor(nameModel) {
        this.nameModel = nameModel
    }

    async getAllRecords() {
        return database[this.nameModel].findAll()
    }

    async getRecord(id) {
        return database[this.nameModel].findOne({where:id});
    }

    async createRecord(data) {
        return database[this.nameModel].create(data);
    }

    async updateRecord(dataUpdate, id, transport = {}) {
        return database[this.nameModel].update(dataUpdate, { where: { id: id } }, transport )
    }

    async deleteRecord(id) {
        return database[this.nameModel]
            .destroy({ where: { id: Number(id) } })
    }

    async repairRecord(id) {
        return database[this.nameModel]
            .restore({ where: { id: Number(id) } })
    }

    async queryRecordOut(id) {
        return database[this.nameModel]
            .findOne({ paranoid: false, where: { id: Number(id) } })
    }

}

module.exports = Services;