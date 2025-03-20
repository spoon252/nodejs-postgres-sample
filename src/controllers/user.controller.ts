import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { email, name } = req.body;
      const user = await UserService.createUser(email, name);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving users' });
    }
  }
}