// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 

//miflash
//router.get('/detail', mainController.detail); 
//router.get('/error', mainController.error); 
//router.get('/product-create-form', mainController.create);
//router.get('/product-edit-form', mainController.edit);
//router.get('/products', mainController.products);
//router.get('/results', mainController.results);
//hasta aca

module.exports = router;
