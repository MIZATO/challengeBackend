'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Categorias', 'deletedAt',{
        allowNull: true,
        type: Sequelize.DATE
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('Categorias', 'deletedAt');
  }
};