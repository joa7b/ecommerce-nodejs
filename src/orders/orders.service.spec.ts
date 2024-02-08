import { Sequelize } from 'sequelize-typescript';
import { TestingModule } from '@nestjs/testing';

import { testModule } from '../../test/test-module';

import { OrdersService } from './orders.service';

import { Order } from './models/order.model';

describe('OrdersService', () => {
  let sequelize: Sequelize;
  let service: OrdersService;
  let orderParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);
    service = module.get<OrdersService>(OrdersService);

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
    expect(service).toBeDefined();
  });

  it('should create an order', async () => {
    const order: Order = await service.createOrder(orderParams);

    expect(order).toBeDefined();
    expect(order.customerCode).toBe(orderParams.customerCode);
    expect(order.totalAmount).toBe(orderParams.totalAmount);
    expect(order.status).toBe(orderParams.status);
  });

  it('should get orders', async () => {
    const order: Order = await service.createOrder(orderParams);
    const orders: Order[] = await service.getOrders();

    expect(orders).toBeDefined();
    expect(orders.length).toBe(1);
  });

  it('should get order by code', async () => {
    const order: Order = await service.createOrder(orderParams);
    const foundOrder: Order = await service.getOrderByCode(order.code);

    expect(foundOrder).toBeDefined();
    expect(foundOrder.code).toBe(order.code);
  });

  it('should update an order', async () => {
    const order: Order = await service.createOrder(orderParams);
    const updatedOrder: Order = await service.updateOrderByCode(order.code, { status: 'PAID' });

    expect(updatedOrder).toBeDefined();
    expect(updatedOrder.code).toBe(order.code);
    expect(updatedOrder.status).toBe('PAID');
  });

  it('should delete an order', async () => {
    const order: Order = await service.createOrder(orderParams);
    await service.deleteOrderByCode(order.code);
    const deletedOrder: Order = await service.getOrderByCode(order.code);

    expect(deletedOrder).toBeDefined();
  });
});