const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.getUsers);

router.post('/', userController.createUsers);

router.get('/:id', userController.getUser);

router.delete('/:id', userController.deleteUser);

router.patch('/:id', userController.updateUser);

module.exports = router;
