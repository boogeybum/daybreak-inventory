// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var NewUser = sequelize.define("NewUser", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1, 75]
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 10]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
  });

  
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  NewUser.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  NewUser.beforeCreate(function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return NewUser;
};
