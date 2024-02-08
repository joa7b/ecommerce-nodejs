'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: 'Coca Cola',
        price: 2500,
        description: 'Refresco de cola',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pepsi',
        price: 2500,
        description: 'Refresco de cola',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fanta',
        price: 2500,
        description: 'Refresco de naranja',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sprite',
        price: 2500,
        description: 'Refresco de limon',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '7up',
        price: 2500,
        description: 'Refresco de limon',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Coca Cola Zero',
        price: 2500,
        description: 'Refresco de cola sin azucar',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pepsi Light',
        price: 2500,
        description: 'Refresco de cola sin azucar',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: 8,
        name: 'Fanta Zero',
        price: 2500,
        description: 'Refresco de naranja sin azucar',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sprite Zero',
        price: 2500,
        description: 'Refresco de limon sin azucar',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '7up Zero',
        price: 2500,
        description: 'Refresco de limon sin azucar',
        stock_quantity: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
