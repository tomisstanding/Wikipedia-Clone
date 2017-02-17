const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);
router.get('/new', controller.new);
router.get('/:id/edit', controller.edit);


router.post('/', controller.create);


module.exports = router;
