import { IUser, IUserDocument } from "../model/userModel";
import { IModels } from "../types/models";


class UserService {
    private model: IModels;

    constructor(model: IModels) {
        this.model = model;
    }

    async createUser(body: IUser): Promise<IUserDocument> {
        return await this.model.users.create(body);
    }

    async updateUser(Uid : string, body : IUser): Promise<IUserDocument | null> {
        const { _id, ...updateData } = body as any; 
        return await this.model.users.findOneAndUpdate({ _id : Uid }, { $set : body }, { new : true });
    }

    async deleteUser(Uid : string): Promise<IUserDocument | null> {
        return await this.model.users.findOneAndDelete({ _id : Uid })
    }
}

export default UserService;