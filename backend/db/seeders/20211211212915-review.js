'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          propertyId: 1,
          commentHeader: 'Test Review Header',
          commentBody: 'Test Review Body',
          createdAt: new Date(),
          updatedAt: new Date()
      }

      ], {});

  },

  down: (queryInterface, Sequelize) => {


      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
