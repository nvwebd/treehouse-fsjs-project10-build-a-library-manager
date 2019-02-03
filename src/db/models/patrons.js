"use strict";
module.exports = (sequelize, DataTypes) => {
  const patrons = sequelize.define(
    "patrons",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      library_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
    },
    {
      timestamps: false,
      underscored: true,
      getterMethods: {
        fullName() {
          return `${this.first_name} ${this.last_name}`;
        }
      }
    }
  );
  patrons.associate = function(models) {
    // associations can be defined here
    models.patrons.hasMany(models.loans);
  };
  return patrons;
};
