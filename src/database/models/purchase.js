function purchaseData(sequelize, DataTypes) {
  
    const table = 'Purchase';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      paymentVoucher: { type: DataTypes.STRING, allowNull: false },
      store: { type: DataTypes.STRING, allowNull: false },
      cuitStore: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.DECIMAL, allowNull: false },
      finalAmount: { type: DataTypes.DECIMAL, allowNull: false },
      type: { type: DataTypes.ENUM('singlePayment', 'montlyPayments'), allowNull: false },
      interest: { type: DataTypes.DECIMAL, allowNull: true },
      numberOfQuotas: { type: DataTypes.INTEGER, allowNull: true },
      storeDiscount: { type: DataTypes.DECIMAL, allowNull: true },
      purchaseDate: { type: DataTypes.DATE, allowNull: false },
      paymentSummary_id: { type: DataTypes.INTEGER, allowNull: false },
      Promotion_id: { type: DataTypes.INTEGER, allowNull: true },
      Card_id: { type: DataTypes.INTEGER, allowNull: false }
    };

  
    const config = { camelCase: false, timestamps: false, tableName: "Purchase" };
  
    const purchase = sequelize.define(table, cols, config);
  
    purchase.associate = function (models) {

      purchase.hasMany(models.Quota, {   
        as: "quotas",
        foreignKey: "Purchase_id"
      });

      purchase.belongsTo(models.Promotion, {   
        as: "promotion",
        foreignKey: "Promotion_id"
      });

      purchase.belongsTo(models.Card, {   
        as: "card",
        foreignKey: "Card_id"
      });

      purchase.belongsTo(models.paymentSummary, {   
        as: "paymentSummary",
        foreignKey: "paymentSummary_id"
      });

    };
  
    return purchase;
  }
  
  module.exports = purchaseData;