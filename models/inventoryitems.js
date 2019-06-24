module.exports = function(sequelize, DataTypes) {
  var Inventoryitem = sequelize.define("Inventoryitem", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    totalinstock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalsales: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  Inventoryitem.associate = function(models) {
    Inventoryitem.belongsTo(models.Invoice, {
      foreignKey: {
        allowNull: true
      }
    });
    Inventoryitem.belongsTo(models.Lot, {
      foreignKey: {
        allowNull: false
      }
    });
    Inventoryitem.belongsTo(models.Itemcategory, {
      foreignKey: {
        allowNull: false
      }
    });
    Inventoryitem.belongsTo(models.Pricerange, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  
  return Inventoryitem;
};
