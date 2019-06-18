'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    mine: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    matching: {
      type: DataTypes.INTEGER,
    },
  }, {timestamps: false});
  Match.associate = function(models) {
    // associations can be defined here
    Match.belongsTo(models.User, {
      foreignKey: "mine"
    })
  };
  return Match;
};