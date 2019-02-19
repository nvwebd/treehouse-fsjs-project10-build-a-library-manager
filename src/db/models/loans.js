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
        validations: {
          notEmpty: {
            msg: "This field is required!"
          },
          isDate: {
            msg: "Please provide date in YYYY-MM-DD format."
          }
        }
      },
      return_by: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validations: {
          isDate: {
            msg: "Please provide date in YYYY-MM-DD format."
          },
          notEmpty: {
            msg: "This field is required!"
          },
          isNotInvalidDateString(value) {
            console.log("THIS IS THE isNotInvalidDateString value: ", value);
            if(value === "Invalid date") {
              throw new Error('Invalid Date, try again!')
            }

            if(this.return_by === "Invalid date") {
              throw new Error('Invalid Date, try again!')
            }
          }
        }
      },
      returned_on: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null,
        validations: {
          len: {
            args: [1, 10],
            msg: "Please provide a return date!"
          },
          notEmpty: {
            msg: "Please provide a return date!"
          },
          isDate: {
            msg: "Please provide date in YYYY-MM-DD format."
          },
          isNotInvalidDateString(value) {
            console.log("THIS IS THE isNotInvalidDateString value: ", value);
            if(value === "Invalid date") {
              throw new Error('Invalid Date, try again!')
            }

            if(this.return_by === "Invalid date") {
              throw new Error('Invalid Date, try again!')
            }
          }
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
