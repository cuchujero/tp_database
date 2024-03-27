function cardData(sequelize, DataTypes) {
  
    const table = 'Card';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      number: { type: DataTypes.STRING, allowNull: true },
      ccv: { type: DataTypes.STRING, allowNull: true },
      cardHolderNameInCard: { type: DataTypes.STRING, allowNull: true },
      since: { type: DataTypes.DATE, allowNull: false },
      expirationDate: { type: DataTypes.DATE, allowNull: false },
      Bank_id: { type: DataTypes.INTEGER, allowNull: false },
      Customer_id: { type: DataTypes.INTEGER, allowNull: false },
    };
  
    const config = { camelCase: false, timestamps: false, tableName: "Card" };
  
    const card = sequelize.define(table, cols, config);
  
    card.associate = function (models) {

      card.belongsTo(models.Bank, {   
        as: "bank",
        foreignKey: "Bank_id"
      });

      card.belongsTo(models.Customer, {   
        as: "customer",
        foreignKey: "Customer_id"
      });

      card.hasMany(models.Purchase, {   
        as: "purchases",
        foreignKey: "Card_id"
      });

    };
  
    return card;
  }
  
  module.exports = cardData;