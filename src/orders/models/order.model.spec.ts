import { Sequelize } from 'sequelize-typescript';
import { TestingModule } from '@nestjs/testing';

import { testModule } from '../../../test/test-module';

import { Order } from './order.model';

describe('OrderModel', () => {
  let sequelize: Sequelize;
  let orderParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

    orderParams = {
      customerCode: 1,
      products: [1, 2, 3],
      totalAmount: 7500,
      status: 'PENDING',
    }
  });

  afterEach(async () => {
    await Order.destroy({
      where: {},
    });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should be defined', () => {
    expect(sequelize).toBeDefined();
  });

  it('should create an order', async () => {
    const order: Order = await Order.create(orderParams);

    expect(order).toBeDefined();
    expect(order.customerCode).toBe(orderParams.customerCode);
    expect(order.totalAmount).toBe(orderParams.totalAmount);
    expect(order.status).toBe(orderParams.status);
  });
});