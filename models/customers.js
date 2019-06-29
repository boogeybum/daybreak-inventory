module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        len: [1, 75]
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    notes: {
      type: DataTypes.STRING
    }
  });

  // Customer.associate = function(models) {
  //   Customer.hasMany(models.Invoice, {
  //     onDelete: "set null"
  //   });
  // };

  return Customer;
};
