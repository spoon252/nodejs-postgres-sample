import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a user.
 *     description: Create a new user with given information.
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: E-mail address of the user.
 *               name:
 *                 type: string
 *                 description: User name.
 *     responses:
 *       201:
 *         description: User has been created successfully.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal error while creating a user.
 */
router.post('/create', UserController.createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users.
 *     description: Get all users from the system.
 *     tags:
 *      - Users
 *     responses:
 *       200:
 *         description: Users returned successfully.
 *       500:
 *         description: Internal error while reading users.
 */
router.get('/', UserController.getAllUsers);

export default router;