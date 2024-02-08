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
    await queryInterface.bulkInsert('orders', [
      {
        customer_code: 1,
        total_amount: 5000,
        status: 'NEW',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        customer_code: 2,
        total_amount: 5000,
        status: 'NEW',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        customer_code: 3,
        total_amount: 5000,
        status: 'PROCESSING',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        customer_code: 4,
        total_amount: 5000,
        status: 'SHIPPED',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        customer_code: 5,
        total_amount: 5000,
        status: 'SHIPPED',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        customer_code: 6,
        total_amount: 5000,
        status: 'DELIVERED',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('orders', null, {});
  }
};
