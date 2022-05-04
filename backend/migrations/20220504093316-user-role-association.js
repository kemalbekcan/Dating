"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Users", {
      fields: ["role_id"],
      type: "foreign key",
      name: "user_role_association",
      references: {
        table: "Roles",
        field: "role_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("Users", {
      fields: ["role_id"],
      type: "foreign key",
      name: "user_role_association",
      references: {
        table: "Roles",
        field: "role_id",
      },
    });
  },
};
