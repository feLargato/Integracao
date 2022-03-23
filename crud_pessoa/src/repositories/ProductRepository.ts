import { Product } from "../model/Product";

const products: Product[] = [];

export class ProductRepository {
    
    create(product: Product) : Product[] {

        products.push(product);

        return products;
    }

    list(): Product[] {
        return products;
    }

    update(updatedProduct: Product): Product[] {

        const index = products.findIndex((product) => product.id === updatedProduct.id);
        products[index] = updatedProduct;

        return products;
    }
   
    delete(id: number): Product [] {
        
        const index = products.findIndex((product) => product.id === id);

        products.splice(index, 1);

        return products;
    }

}