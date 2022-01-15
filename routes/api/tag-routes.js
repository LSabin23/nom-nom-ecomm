const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

// GET all tags
router.get('/', (req, res) => {
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: [
      'id',
      'tag_name'
    ],
    order: [['tag_name', 'ASC']],
    include: [
      {
        model: Product,
        attributes: ['product_name'],
        through: ProductTag,
        as: 'product_tags'
      }
    ]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// GET a tag by its 'id'
router.get('/:id', (req, res) => {
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'tag_name'
    ],
    order: [['tag_name', 'ASC']],
    include: [
      {
        model: Product,
        attributes: ['product_name'],
        through: ProductTag,
        as: 'product_tags'
      }
    ]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// POST a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// UPDATE/PUT a tag by its 'id' value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbTagData => {
      if (!dbTagData[0]) {
        res.status(404).json({ message: 'No tag found with this id' })
        return
      }
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// DELETE a tag by its 'id' value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData[0]) {
        res.status(404).json({ message: 'No tag found with this id' })
        return
      }
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
