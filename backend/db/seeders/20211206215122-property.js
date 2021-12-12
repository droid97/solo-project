'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Properties', [

        
          {
            userId: 1,
            imageUrl:
              "https://res.cloudinary.com/dbtsjperv/image/upload/v1636987850/9d928940-f0d1-4504-99d3-b69a5f737012_jmr6vd.webp",
            description:
              "At the beginning, the Lagöm is a swedish way of life: how to live well with less! With its large windows, the Lagöm offers you a totale immersion on the nature with a breathtaking view on the mountains and the Saint Laurent river. ",
            title: "Le Lagöm MIRADORS",
            name: "Tiny house hosted by Laury Jane",
            address: "1453 Bay Street",
            city: "Lac-Beauport",
            state: "Québec",
            country: "Canada",
            price: "289",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ], {});

  },

  down: (queryInterface, Sequelize) => {



      return queryInterface.bulkDelete('Properties', null, {});

  }
};
