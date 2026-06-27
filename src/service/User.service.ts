import { IUser } from "../model/userModel";
import { IModels } from "../types/models";

class UserService {
    private model: IModels;

    constructor(model: IModels) {
        this.model = model;
    }

    async createUser(body: IUser) {
        return await this.model.users.create(body);
    }
}

export default UserService;