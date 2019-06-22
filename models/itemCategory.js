module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
  });

  // Item.associate = function(models) {
  //   Item.hasMany(models.Inventoryitem, {
  //     onDelete: "set null"
  //   });
  // };
  /*
  Item.create({
    description: "Pants",
    retailprice: 35,
    wholesaleprice: 25
  }).then(function(item) {
    console.log(item.get("description"));
  });
  Item.create({
    description: "Shirt",
    retailprice: 25,
    wholesaleprice: 15
  }).then(function(item) {
    console.log(item.get("description"));
  });
  Item.create({
    description: "Dress",
    retailprice: 35,
    wholesaleprice: 25
  }).then(function(item) {
    console.log(item.get("description"));
  });
*/
  return Category;
};
