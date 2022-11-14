module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Videos', [
			{
				titulo: 'java',
				categoriaId: 1,
				descricao: 'Java Iniciante',
				url: 'https://www.youtube.com/watch?v=sZAxLRMxEUo',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				titulo: 'JavaScript',
				categoriaId: 2,
				descricao: 'Javascript È capaz de fazer o que?',
				url: 'https://www.youtube.com/watch?v=Ptbk2af68e8',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				titulo: 'Conceito Programacao',
				categoriaId: 1,
				descricao: 'Um dos conceitos mais importantes na Programação',
				url: 'https://www.youtube.com/watch?v=P5kfA6ncOs8&t=145s',
				createdAt: new Date(),
				updatedAt: new Date()
			},
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Videos', null, {})
  }
}
