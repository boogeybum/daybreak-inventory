module.exports = function(sequelize, DataTypes) {
    var Pricerange = sequelize.define("Pricerange", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      begin: {
        type: DataTypes.FLOAT
      },
      end: {
        type: DataTypes.FLOAT
      }
    });
  
    return Pricerange;
  };
  