import { Sequelize } from 'sequelize-typescript';
import { TestingModule } from '@nestjs/testing';

import { testModule } from '../../../test/test-module';
import { Product } from './product.model';

describe('ProductModel', () => {
  let sequelize: Sequelize;
  let productParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

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
    expect(sequelize).toBeDefined();
  });

  it('should create a product', async () => {
    const product: Product = await Product.create(productParams);

    expect(product).toBeDefined();
    expect(product.name).toBe(productParams.name);
    expect(product.description).toBe(productParams.description);
    expect(product.price).toBe(productParams.price);
    expect(product.stockQuantity).toBe(productParams.stockQuantity);
  });
});