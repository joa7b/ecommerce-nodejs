import { Sequelize } from 'sequelize-typescript';
import { TestingModule } from '@nestjs/testing';

import { testModule } from '../../test/test-module';

import { ProductsController } from './products.controller';

import { Product } from './models/product.model';
import { Order } from '../orders/models/order.model';

describe('productsController', () => {
  let sequelize: Sequelize;
  let controller: ProductsController;
  let productParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

    controller = module.get<ProductsController>(ProductsController);

    Order.destroy({
      where: {},
    });

    productParams = {
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stockQuantity: 10,
    };
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
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    const product: Product = await controller.createProduct(productParams);

    expect(product).toBeDefined();
    expect(product.name).toBe(productParams.name);
    expect(product.description).toBe(productParams.description);
    expect(product.price).toBe(productParams.price);
    expect(product.stockQuantity).toBe(productParams.stockQuantity);
  });

  it('should get products', async () => {
    const product: Product = await controller.createProduct(productParams);
    const products: Product[] = await controller.getProducts();

    expect(products).toBeDefined();
    expect(products.length).toBe(1);
  });

  it('should get a product', async () => {
    const product: Product = await controller.createProduct(productParams);
    const productFound: Product = await controller.getProduct(product.code);

    expect(productFound).toBeDefined();
    expect(productFound.name).toBe(product.name);
    expect(productFound.description).toBe(product.description);
    expect(productFound.price).toBe(product.price);
    expect(productFound.stockQuantity).toBe(product.stockQuantity);
  });

  it('should update a product', async () => {
    const product: Product = await controller.createProduct(productParams);
    const updatedProduct: Product = await controller.updateProduct(
      {
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        stockQuantity: 20,
      },
      product.code
    );

    expect(updatedProduct).toBeDefined();
    expect(updatedProduct.name).toBe('Product 2');
    expect(updatedProduct.description).toBe('Description 2');
    expect(updatedProduct.price).toBe(200);
    expect(updatedProduct.stockQuantity).toBe(20);
  });

  it('should delete a product', async () => {
    const product: Product = await controller.createProduct(productParams);
    await controller.deleteProduct(product.code);
    const products: Product[] = await controller.getProducts();

    expect(products).toBeDefined();
    expect(products.length).toBe(0);
  });
});