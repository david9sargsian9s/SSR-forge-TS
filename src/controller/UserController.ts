import { Request, Response } from 'express';

class UserController {
    async createUser(req : Request, res : Response) {
        try {
            const user = await req.app.locals.services.users.createUser(req.body);
            res.status(200).set({
                'content-type' : 'application/json',
                'Cache-Control' : 'max-age=70'
            }).json({ user });
        } catch (error : unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            res.status(400).json({ error : error })
        }
    }

    async updateUser(req : Request, res : Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ error: "the user is not authorized." });
            }

            const Uid = req.user.id;
            
            const UpdatedInfo = await req.app.locals.services.users.updateUser(Uid, req.body);
            res.status(200).set({
                'content-type' : 'application/json',
                'Cache-Control' : 'max-age=70',
            }).json({ UpdatedInfo });
        } catch (error : unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            res.status(400).json({ error : error })
        }
    }

    async deleteUser(req : Request, res : Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ error : "the user is not authorized or is not defined." });
            }

            const Uid = req.user.id;

            const deleted = await req.app.locals.services.users.deleteUser(Uid);
        } catch (error : unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            res.status(400).json({ error : error })
        }
    }
}

export default UserController;