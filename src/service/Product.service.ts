import { productModel } from "../model/productModel";

interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
};


interface Imodels {
    products: typeof productModel;
}

class ProductService {
    private model : Imodels;

    constructor(model : Imodels) {
        this.model = model;
    }


}

export default ProductService;