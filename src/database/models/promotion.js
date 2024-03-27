function promotionData(sequelize, DataTypes) {
  
    const table = 'Promotion';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      code: { type: DataTypes.STRING, allowNull: false },
      promotionTitle: { type: DataTypes.STRING, allowNull: false },
      nameStore: { type: DataTypes.STRING, allowNull: false },
      cuilStore: { type: DataTypes.STRING, allowNull: false },
      validityStartDate: { type: DataTypes.DATE, allowNull: false },
      validityEndDate: { type: DataTypes.DATE, allowNull: false },
      comments: { type: DataTypes.INTEGER, allowNull: false },
      Bank_id: { type: DataTypes.STRING, allowNull: false },
      type: { type: DataTypes.ENUM('financing','discount'), allowNull: false },
      numberOfQuotas: { type: DataTypes.INTEGER, allowNull: true },
      interest: { type: DataTypes.DECIMAL, allowNull: true },
      discountPercentage: { type: DataTypes.DECIMAL, allowNull: true },
      priceCap: { type: DataTypes.DECIMAL, allowNull: true },
      onlyCash: { type: DataTypes.BOOLEAN, allowNull: true },
      promotionEnable: { type: DataTypes.BOOLEAN, allowNull: false }
    };
  
    const config = { camelCase: false, timestamps: false, tableName: "Promotion" };
  
    const promotion = sequelize.define(table, cols, config);
  
    promotion.associate = function (models) {
      
      promotion.belongsTo(models.Bank, {   
        as: "bank",
        foreignKey: "Bank_id"
      });

      promotion.hasMany(models.Purchase, {   
        as: "purchases",
        foreignKey: "Promotion_id"
      });
      
    };
  
    return promotion;
  }
  
  module.exports = promotionData;