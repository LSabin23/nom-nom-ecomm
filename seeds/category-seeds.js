const { Category } = require('../models')

const categoryData = [
  {
    category_name: 'Drinks'
  },
  {
    category_name: 'Appetizers'
  },
  {
    category_name: 'Entrees'
  },
  {
    category_name: 'Sides'
  },
  {
    category_name: 'Desserts'
  },
  {
    category_name: 'Garbage'
  }
]

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories
