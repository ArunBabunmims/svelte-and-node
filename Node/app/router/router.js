const router = require('express').Router();
const controller = require('../controller/controller')

router.post('/addTodolist',controller.insertTask);


module.exports = router;

