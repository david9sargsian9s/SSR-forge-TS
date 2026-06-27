import express = require('express');
import UserController from '../controller/UserController';
var router = express.Router();

const user = new UserController();

/* GET users listing. */
router.get('/api/users', user.getUser);

export default router;
