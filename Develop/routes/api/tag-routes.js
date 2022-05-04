const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({});
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagID = await Tag.findByPk(req.body.id);
    res.status(200).json(tagID)
  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const creatTag = await Tag.create(req.body)
    res.status(200).json(creatTag)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
     tag_name : req.body.tag_name
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated category as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((deleteTag) => {
      res.json(deleteTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
