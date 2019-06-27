module.exports = function(sequelize, DataTypes) {
  var Itemcategory = sequelize.define("Itemcategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
      ,
      validate: {
        len: [1, 100]
      }
    }
  });

  return Itemcategory;
};
