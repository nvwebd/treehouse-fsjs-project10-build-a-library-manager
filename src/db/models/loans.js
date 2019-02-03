"use strict";
module.exports = (sequelize, DataTypes) => {
  const loans = sequelize.define(
    "loans",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true
        }
      },
      patron_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true
        }
      },
      loaned_on: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validations: {
          isDate: true
        }
      },
      return_by: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validations: {
          isDate: true
        }
      },
      returned_on: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validations: {
          isDate: true
        }
      }
    },
    { timestamps: false, underscored: true }
  );
  loans.associate = models => {
    // associations can be defined here
    loans.belongsTo(models.books, {
      foreignKey: {
        allowNull: false
      }
    });
    loans.belongsTo(models.patrons, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return loans;
};
