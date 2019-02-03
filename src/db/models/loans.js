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
          isInt: {
            msg: "This field is required!"
          }
        }
      },
      patron_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "This field is required!"
          }
        }
      },
      loaned_on: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validations: {
          notNull: {
            msg: "This field is required!"
          },
          isDate: {
            msg: "Sorry Date format is incorrect - use YYYY-MM-DD"
          }
        }
      },
      return_by: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validations: {
          isDate: {
            msg: "Sorry Date format is incorrect - use YYYY-MM-DD"
          },
          notNull: {
            msg: "This field is required!"
          }
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
