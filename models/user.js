'use strict';
// const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {timestamps: false});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Match);
  };
  return User;
};