const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'category_id' });
      this.hasMany(models.Basket, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    title: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    img: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discount: DataTypes.BOOLEAN,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
