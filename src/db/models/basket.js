const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
