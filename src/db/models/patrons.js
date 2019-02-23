"use strict";
module.exports = (sequelize, DataTypes) => {
  const patrons = sequelize.define(
    "patrons",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field is required!"
          }
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field is required!"
          }
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field is required!"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please input a email - example@example.com"
          }
        }
      },
      library_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field is required!"
          }
        }
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "Zip Code has to be a numeric value - Number"
          },
          notEmpty: {
            msg: "This field is required!"
          }
        }
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  );
  patrons.associate = models => {
    patrons.hasMany(models.loans);
  };
  return patrons;
};
