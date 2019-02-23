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
          },
          notEmpty: {
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
          },
          notEmpty: {
            msg: "This field is required!"
          }
        }
      },
      loaned_on: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field is required!"
          },
          notContains: {
            args: ["Invalid date"],
            msg: "Please provide date in YYYY-MM-DD format."
          },
          isDate: {
            msg: "Please provide date in YYYY-MM-DD format."
          }
        }
      },
      return_by: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notContains: {
            args: ["Invalid date"],
            msg: "Please provide date in YYYY-MM-DD format."
          },
          isDate: {
            msg: "Please provide date in YYYY-MM-DD format."
          }
        }
      },
      returned_on: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          notContains: {
            args: ["Invalid date"],
            msg: "Please provide date in YYYY-MM-DD format."
          },
          isDate: {
            msg: "Please provide date in YYYY-MM-DD format."
          },
          notEmpty: {
            msg: "This field is required!"
          },
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
