function paymentSummaryData(sequelize, DataTypes) {
  
    const table = 'paymentSummary';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      code: { type: DataTypes.STRING, allowNull: false },
      month: { type: DataTypes.STRING, allowNull: false },
      year: { type: DataTypes.STRING, allowNull: false },
      firstExpiration: { type: DataTypes.DATE, allowNull: false },
      secondExpiration: { type: DataTypes.DATE, allowNull: false },
      surchargePercentaje: { type: DataTypes.DECIMAL, allowNull: false },
      totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
    };
 
    const config = { camelCase: false, timestamps: false, tableName: "paymentSummary" };
  
    const paymentSummary = sequelize.define(table, cols, config);
  
    paymentSummary.associate = function (models) {

      paymentSummary.hasMany(models.Quota, {   
        as: "quotas",
        foreignKey: "paymentSummary_id"
      });

      paymentSummary.hasMany(models.Purchase, {   
        as: "purchases",
        foreignKey: "paymentSummary_id"
      });

    };
  
    return paymentSummary;
  }
  
  module.exports = paymentSummaryData;