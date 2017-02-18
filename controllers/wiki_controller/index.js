const router = require('express').Router();

const controller = require('./controller');

router.get('/:id/edit', controller.edit);
router.get('/new', controller.new);
router.get('/', controller.index);

router.put('/:id', controller.update);
router.post('/', controller.create);

router.delete('/:id', controller.destroy);


module.exports = router;
