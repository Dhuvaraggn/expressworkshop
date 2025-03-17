const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.config")
const User = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "username"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user','admin'),
      allowNull: true,
      defaultValue: "user"
    }
  },
  {
    timestamps: false
  }
)


module.exports = User