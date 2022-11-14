module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Categorias', [
			{
				titulo: 'Livre',
				cor: 'blue',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				titulo: 'JavaScript',
				cor: 'red',
				createdAt: new Date(),
				updatedAt: new Date()
			},
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Categorias', null, {})
  }
}