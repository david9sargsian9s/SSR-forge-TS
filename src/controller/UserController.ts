import { Request, Response } from 'express';

class UserController {
    async createUser(req : Request, res : Response) {
        try {
            await req.app.locals.services.users.createUser(req.body);
        } catch (error) {
            
        }
    }

    async updateUser(req : Request, res : Response) {
        try {
            
        } catch (error) {
            
        }
    }

    async deleteUser(req : Request, res : Response) {
        try {
            
        } catch (error) {
            
        }
    }
}

export default UserController;