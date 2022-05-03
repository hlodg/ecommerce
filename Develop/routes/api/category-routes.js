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

router.get('/:id', (req, res) => {

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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catID = await Category.update({
      category_name: req.body.name
    },
    where, {
      id: req.params.id
    })
    res.status(200).json(catID)

  } catch (error) {
    res.status(500), json(error)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  
});

module.exports = router;
