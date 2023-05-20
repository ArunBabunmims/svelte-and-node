const router = require('express').Router();
const controller = require('../controller/controller')

router.post('/addTodolist',controller.insertTask);
router.post('/addProduct',controller.insertProduct);
router.get('/viewProduct',controller.viewProduct);
router.post('/deleteProduct',controller.deleteProduct);
router.post('/updateProduct',controller.updateProduct);
router.get('/viewCart',controller.viewCart);
router.post('/insertUser',controller.insertUser);
router.post('/addToCart',controller.addToCart);
router.post('/verifyLogin',controller.verifyLogin);
router.get('/get-cart',controller.getCart);
router.post('/addQuantity',controller.addQuantity);
router.post('/removeQuantity',controller.removeQuantity);
router.post('/deleteCartProduct',controller.deleteCartProduct);


module.exports = router;

