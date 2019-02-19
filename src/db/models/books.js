"use strict";
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define(
    "books",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This Field is required!"
          }
        }
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This Field is required!"
          }
        }
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This Field is required!"
          }
        }
      },
      first_published: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isInt: {
            msg: "Zip Code has to be a Number!"
          },
          isYearCompliant: (inputYear) => {
            const currentYear = new Date().getFullYear();
            if (inputYear > currentYear) {
              throw new Error("First Published Year must be in the past!");
            }
          }
        }
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  );
  books.associate = function(models) {
    // associations can be defined here
    books.hasMany(models.loans);
  };
  return books;
};
