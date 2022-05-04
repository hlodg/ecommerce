const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categories = await Category.findAll({});
    res.status(200).json(categories);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const catids = await Category.findByPk(req.body.id);
    res.status(200).json(catids)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const cat = await Category.create(req.body)
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {category_name: req.body.category_name},
    {where: {
        id: req.body.id,
      }})
    .then((updatedCategory) => {
      // Sends the updated category as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((deletedCat) => {
      res.json(deletedCat);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
