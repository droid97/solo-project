'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    propertyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    commentHeader: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    commentBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Property, { foreignKey: "propertyId" });
    
  };
  return Review;
};
