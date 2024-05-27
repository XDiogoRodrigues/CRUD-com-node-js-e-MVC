const { DataTypes } = require("sequelize");
const conn = require("../db/conn");
const User = require("../models/User");

const Address = conn.define("Address", {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Address.belongsTo(User);
