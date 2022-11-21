const { CategoriasServices } = require('../services');
const categoriasServices = new CategoriasServices();

class CategoriaController {
    static async getAllCategorias(req, res) {
        try {
            const allCategorias = await categoriasServices.getAllRecords();
            return res.status(200).json(allCategorias);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getCategoria(req, res) {
        const { id } = req.params;
        try {
            const categoria = await categoriasServices.getRecord({id});
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createCategoria(req, res) {
        const newCategoria = req.body;
        try {
            const newCategoriaCreate = await categoriasServices.createRecord(newCategoria);
            return res.status(200).json(newCategoriaCreate)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateCategoria(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await categoriasServices.updateRecord(newInfo, Number(id));
            return res.status(200).json({ message: `Categoria com id${id} atualizado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteCategoria(req, res) {
        const { id } = req.params;
        try {
            await categoriasServices.deleteRecord(Number(id));
            return res.status(200).json({ message: `Categoria com o id:${id} foi deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async repairCategoria(req, res) {
        const { id } = req.params;
        try {
            const recordRepair = await categoriasServices.repairRecord(Number(id));
            return res.status(200).json(recordRepair);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getCategoriaOut(req, res) {
        const { id } = req.params;
        try {
            const categoria = await categoriasServices.queryRecordOut({ id });
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CategoriaController;