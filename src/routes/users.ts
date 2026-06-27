import express = require('express');
import UserController from '../controller/UserController';
var router = express.Router();

const user = new UserController();

/* POST user. */
router.post('/api/users', user.createUser);

/* PATCH user info. */
router.patch('/api/users', user.updateUser);

/* DELETE user info. */
router.patch('/api/users', user.deleteUser);

export default router;
