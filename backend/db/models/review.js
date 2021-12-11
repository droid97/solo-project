'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    propertyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    review: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Property, { foreignKey: "propertyId" });
  };
  return Review;
};
