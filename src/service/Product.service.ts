import { Model } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
};

interface Imodels {
    users : Model<IProduct>
}

class ProductService {
    private model : Imodels;

    constructor(model : Imodels) {
        this.model = model;
    }


}

export default ProductService;