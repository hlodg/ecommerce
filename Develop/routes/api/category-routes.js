const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({});
    res.status(200).json(categories);
    } catch (err) {
      console.log (err)
      res.status(500).json(err)
    } 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // try {
  //   const categories = await Category.findAll({
  //     include: [{model:id, model:ProductTag.product_id}],
      
  //   });
  //   console.log(category_name);
  //   res.status(200).json(categories);
  //   } catch (err) {
  //     res.status(500).json(err)
  //   } 
});

router.post('/', async (req, res) => {
  // create a new category
 try {
   const cat= await Category.create(req.body)
   res.status(200).json(cat)
 } catch (error) {
   res.status(500).json(error)
 } 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
