const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("formulario_node_mvc", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
