"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn("groceryitems", "shoppinglistid", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "shoppinglists",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("groceryitems", "shoppinglistid");
  }
};
