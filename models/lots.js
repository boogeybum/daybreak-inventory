module.exports = function(sequelize, DataTypes) {
  var Lot = sequelize.define("Lot", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    // colorhexcode: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     len: [1, 10]
    //   }
    // },
    count: {
      type: DataTypes.INTEGER
    },
    cost: {
      type: DataTypes.INTEGER
    },
    purchasedate: {
      type: DataTypes.DATE
    }
    // colordesc: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     len: [1, 50]
    //   }
    // }
  });

  // Lot.associate = function(models) {
  //   Lot.hasMany(models.Inventoryitem, {
  //     // onDelete: "set null"
  //   });
  // };

  return Lot;
};
