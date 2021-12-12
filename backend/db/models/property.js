'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property',     {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
    },


  }, {});
  Property.associate = function(models) {
    // associations can be defined here
 Property.belongsTo(models.User, { foreignKey: "userId" });
 Property.hasMany(models.Review, { foreignKey: "propertyId", onDelete: 'CASCADE', hooks: true})
  };
  return Property;
};
