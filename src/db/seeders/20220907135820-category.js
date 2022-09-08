module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Антибактериальные препараты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гормоны',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Препараты, влияющие на иммунитет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Препараты влияющие на психику',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Противовирусные препараты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Противовоспалительные и обезболивающие препараты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
