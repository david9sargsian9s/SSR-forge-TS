import express from 'express';
import UserController from '../controller/UserController';
import getAccessFromCheck from '../middlewares/getAccessToken';
var router = express.Router();

const user = new UserController();

/* POST user. */
router.post('/api/users', user.createUser);

/* PATCH user info. */
router.patch('/api/users/:id', getAccessFromCheck, user.updateUser);

/* DELETE user info. */
router.delete('/api/users/:id', getAccessFromCheck, user.deleteUser);

export default router;
