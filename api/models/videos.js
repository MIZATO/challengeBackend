'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {

    static associate(models) {
      Videos.belongsTo(models.Categorias, {
        foreignKey: 'categoriaId'
      });
    }
  }
  Videos.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    fields: ['titulo'],
    paranoid: true,
    modelName: 'Videos',
  });
  return Videos;
};