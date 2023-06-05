'use strict';

const { hashPassword }= require("../helpers/bcrypt")
const data = [
  {
    username: "John Doe",
    email: "johndoe@mail.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    password: hashPassword("johndoe")
  },
  {
    username: "admin",
    email: "admin@admin.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    password: hashPassword("admin")
  }
]

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
    await queryInterface.bulkInsert("Users", data, {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users",null, {})

  }
};
