import { Sequelize } from 'sequelize-typescript';
import { TestingModule } from '@nestjs/testing';

import { testModule } from '../../test/test-module';

import { OrdersController } from './orders.controller';

import { Order } from './models/order.model';

describe('OrdersController', () => {
  let sequelize: Sequelize;
  let controller: OrdersController;
  let orderParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

    controller = module.get<OrdersController>(OrdersController);

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
    expect(controller).toBeDefined();
  });

  it('should create an order', async () => {
    const order: Order = await controller.createOrder(orderParams);

    expect(order).toBeDefined();
    expect(order.customerCode).toBe(orderParams.customerCode);
    expect(order.totalAmount).toBe(orderParams.totalAmount);
    expect(order.status).toBe(orderParams.status);
  });

  it('should get orders', async () => {
    const order: Order = await controller.createOrder(orderParams);
    const orders: Order[] = await controller.getOrders();

    expect(orders).toBeDefined();
    expect(orders.length).toBe(1);
  });

  it('should get an order', async () => {
    const order: Order = await controller.createOrder(orderParams);
    const orderFound: Order = await controller.getOrder(order.code);

    expect(orderFound).toBeDefined();
    expect(orderFound.code).toBe(order.code);
  });

  it('should update an order', async () => {
    const order: Order = await controller.createOrder(orderParams);
    const orderUpdated: Order = await controller.updateOrder({ status: 'PAID' }, order.code);

    expect(orderUpdated).toBeDefined();
    expect(orderUpdated.status).toBe('PAID');
  });

  it('should delete an order', async () => {
    const order: Order = await controller.createOrder(orderParams);
    await controller.deleteOrder(order.code);

    const orderFound: Order = await controller.getOrder(order.code);

    expect(orderFound).toBe(null);
  });
});