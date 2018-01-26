"use strict";
module.exports = (sequelize, DataTypes) => {
  var groceryitem = sequelize.define(
    "groceryitem",
    {
      itemname: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.NUMERIC
    },
    {}
  );

  groceryitem.associate = function(models) {
    groceryitem.belongsTo(models.shoppinglist, {
      as: "shoppinglist",
      foreignKey: "shoppinglistid"
    });
  };
  return groceryitem;
};
