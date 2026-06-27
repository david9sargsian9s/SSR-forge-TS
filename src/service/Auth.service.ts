import { IModels } from "../types/models";

class AuthService {
    private model: IModels;

    constructor(model: IModels) {
        this.model = model;
    }
}

export default AuthService;