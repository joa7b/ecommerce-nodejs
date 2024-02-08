import { Sequelize } from "sequelize-typescript";
import { TestingModule } from "@nestjs/testing";

import { testModule } from "../../test/test-module";

import { ProductsService } from "./products.service";

import { Product } from "./models/product.model";

describe('productsService', () => {
  let sequelize: Sequelize;
  let service: ProductsService;
  let productParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);
    service = module.get<ProductsService>(ProductsService);

    productParams = {
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stockQuantity: 10,
    }
  });

  afterEach(async () => {
    await Product.destroy({
      where: {},
    });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    const product: Product = await service.createProduct(productParams);

    expect(product).toBeDefined();
    expect(product.name).toBe(productParams.name);
    expect(product.description).toBe(productParams.description);
    expect(product.price).toBe(productParams.price);
    expect(product.stockQuantity).toBe(productParams.stockQuantity);
  });

  it('should get products', async () => {
    const product: Product = await service.createProduct(productParams);
    const products: Product[] = await service.getProducts();

    expect(products).toBeDefined();
    expect(products[0].name).toBe(productParams.name);
    expect(products[0].description).toBe(productParams.description);
    expect(products[0].price).toBe(productParams.price);
    expect(products[0].stockQuantity).toBe(productParams.stockQuantity);
  });

  it('should get a product by code', async () => {
    const product: Product = await service.createProduct(productParams);
    const foundProduct: Product = await service.getProductByCode(product.code);

    expect(foundProduct).toBeDefined();
    expect(foundProduct.name).toBe(productParams.name);
    expect(foundProduct.description).toBe(productParams.description);
    expect(foundProduct.price).toBe(productParams.price);
    expect(foundProduct.stockQuantity).toBe(productParams.stockQuantity);
  });

  it('should update a product by code', async () => {
    const product: Product = await service.createProduct(productParams);
    const newProductParams: any = {
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stockQuantity: 20,
    };
    const updatedProduct: Product = await service.updateProductByCode(product.code, newProductParams);

    expect(updatedProduct).toBeDefined();
    expect(updatedProduct.name).toBe(newProductParams.name);
    expect(updatedProduct.description).toBe(newProductParams.description);
    expect(updatedProduct.price).toBe(newProductParams.price);
    expect(updatedProduct.stockQuantity).toBe(newProductParams.stockQuantity);
  });

  it('should delete a product by code', async () => {
    const product: Product = await service.createProduct(productParams);
    await service.deleteProductByCode(product.code);
    const deletedProduct: Product = await service.getProductByCode(product.code);

    expect(deletedProduct).toBeDefined();
  });
});