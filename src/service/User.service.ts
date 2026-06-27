import { Model } from "mongoose";

interface IUser {
  name: string;
  nameLength?: number;
  age: number;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'moderator';
  status: 'active' | 'banned' | 'pending';
}

interface Imodels {
    users : Model<IUser>
}

class UserService {
    private model : Imodels;
    
    constructor(model : Imodels) {
        this.model = model;
    }

    
}

export default UserService;