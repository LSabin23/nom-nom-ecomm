const { Product } = require('../models')

const productData = [
  {
    product_name: 'Lemonade',
    price: 4.79,
    stock: 14,
    category_id: 1
  },
  {
    product_name: 'Ice Cream',
    price: 10.0,
    stock: 25,
    category_id: 5
  },
  {
    product_name: 'Steamed Vegetables',
    price: 2.29,
    stock: 12,
    category_id: 4
  },
  {
    product_name: 'Cilantro Lime Chicken',
    price: 21.99,
    stock: 50,
    category_id: 3
  },
  {
    product_name: 'Chips & Salsa',
    price: 5.99,
    stock: 22,
    category_id: 2
  }
]

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts
