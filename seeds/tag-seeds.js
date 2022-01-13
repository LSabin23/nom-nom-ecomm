const { Tag } = require('../models')

const tagData = [
  {
    tag_name: 'gourmet'
  },
  {
    tag_name: 'savory'
  },
  {
    tag_name: 'crunchy'
  },
  {
    tag_name: 'healthy'
  },
  {
    tag_name: 'light'
  },
  {
    tag_name: 'sweet'
  },
  {
    tag_name: 'exotic'
  },
  {
    tag_name: 'refreshing'
  }
]

const seedTags = () => Tag.bulkCreate(tagData)

module.exports = seedTags
