function quotaData(sequelize, DataTypes) {
  
    const table = 'Quota';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      number: { type: DataTypes.INTEGER, allowNull: false },
      price: { type: DataTypes.DECIMAL, allowNull: false },
      month: { type: DataTypes.STRING, allowNull: false },
      year: { type: DataTypes.STRING, allowNull: false },
      Purchase_id: { type: DataTypes.INTEGER, allowNull: false },
      paymentSummary_id: { type: DataTypes.INTEGER, allowNull: false }
    };
  
    const config = { camelCase: false, timestamps: false, tableName: "Quota" };
  
    const quota = sequelize.define(table, cols, config);
  
    quota.associate = function (models) {

      quota.belongsTo(models.Purchase, {   
        as: "purchase",
        foreignKey: "Purchase_id"
      });

      quota.belongsTo(models.paymentSummary, {   
        as: "paymentSummary",
        foreignKey: "paymentSummary_id"
      });

    };
  
    return quota;
  }
  
  module.exports = quotaData;