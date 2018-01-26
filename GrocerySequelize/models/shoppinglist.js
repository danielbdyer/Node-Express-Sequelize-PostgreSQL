"use strict";
module.exports = (sequelize, DataTypes) => {
  var shoppinglist = sequelize.define(
    "shoppinglist",
    {
      storename: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.INTEGER
    },
    {}
  );
  shoppinglist.associate = function(models) {
    shoppinglist.hasMany(models.groceryitem, {
      as: "groceryitems",
      foreignKey: "shoppinglistid"
    });
  };
  return shoppinglist;
};
