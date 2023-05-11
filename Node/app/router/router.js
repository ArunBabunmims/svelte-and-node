const router = require('express').Router();
const controller = require('../controller/controller')

router.post('/addTodolist',controller.insertTask);
router.post('/addProduct',controller.insertProduct);
router.get('/viewProduct',controller.viewProduct);

module.exports = router;

