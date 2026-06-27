import { IProduct } from "../model/productModel";
import { IModels } from "../types/models";

class ProductService {
    private model: IModels;

    constructor(model: IModels) {
        this.model = model;
    }

    async createProduct(body: IProduct) {
        return await this.model.products.create(body);
    }
}

export default ProductService;