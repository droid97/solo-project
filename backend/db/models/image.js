'use strict';

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image',
  {
    homeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Property, { foreignKey: "propertyId" } )
  };
  return Image;
};
