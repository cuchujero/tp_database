function customerData(sequelize, DataTypes) {
  
    const table = 'Customer';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      completeName: { type: DataTypes.STRING, allowNull: false },
      dni: { type: DataTypes.STRING, allowNull: false },
      cuil: { type: DataTypes.STRING, allowNull: true },
      address: { type: DataTypes.STRING, allowNull: false },
      telephone: { type: DataTypes.STRING, allowNull: false },
      entryDate: { type: DataTypes.DATE, allowNull: false }
    };

    const config = { camelCase: false, timestamps: false, tableName: "Customer" };
  
    const customer = sequelize.define(table, cols, config);
  
    customer.associate = function (models) {

      customer.hasMany(models.Purchase, {   
        as: "purchases",
        foreignKey: "Card_id"
      });

      customer.belongsToMany(models.Bank, {
        as: "banks",
        through: "Bank_Customer",
        foreignKey: "Customer_id",
        otherKey: "Bank_id",
        timestamps: false
      });

    };
  
    return customer;
  }
  
  module.exports = customerData;