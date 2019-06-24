module.exports = function(sequelize, DataTypes) {
  var Lot = sequelize.define("Lot", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
     count: {
      type: DataTypes.INTEGER
    },
    cost: {
      type: DataTypes.DOUBLE
    },
    purchasedate: {
      type: DataTypes.DATE
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 25]
      }
    }
  });

  Lot.associate = function(models) {
    Lot.hasMany(models.Inventoryitem, {
      onDelete: "set null"
    });
  };

  return Lot;
};
