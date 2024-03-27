function bankData(sequelize, DataTypes) {
  
    const table = 'Bank';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      cuit: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      telephone: { type: DataTypes.STRING, allowNull: false }
    };
  
    const config = { camelCase: false, timestamps: false, tableName: "Bank" };
  
    const bank = sequelize.define(table, cols, config);
  
    bank.associate = function (models) {

      bank.hasMany(models.Promotion, {   
        as: "promotions",
        foreignKey: "Bank_id"
      });

      bank.hasMany(models.Card, {   
        as: "cards",
        foreignKey: "Bank_id"
      });

      bank.belongsToMany(models.Customer, {
          as: "customers",
          through: "Bank_Customer",
          foreignKey: "Bank_id",
          otherKey: "Customer_id",
          timestamps: false
      });
        
    };
  
    return bank;
  }
  
  module.exports = bankData;