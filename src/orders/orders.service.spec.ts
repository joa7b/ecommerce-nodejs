import { Sequelize } from 'sequelize-typescript';
import { TestingModule } from '@nestjs/testing';

import { testModule } from '../../test/test-module';

import { OrdersService } from './orders.service';

import { Order } from './models/order.model';
import { Product } from '../products/models/product.model';

describe('OrdersService', () => {
  let sequelize: Sequelize;
  let service: OrdersService;
  let orderParams: any;
  let productParams: any;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);
    service = module.get<OrdersService>(OrdersService);

    productParams = {
      name: 'Product 1',
      description: 'Product 1 description',
      price: 2500,
      stockQuantity: 10,
    };

    orderParams = {
      customerCode: 1,
      products: [],
      totalAmount: 7500,
      status: 'PENDING',
    }
  });

  afterEach(async () => {
    await Product.destroy({
      where: {},
    });
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
    const product: Product = await Product.create<Product>(productParams);
    const order: Order = await service.createOrder({...orderParams, products: [product.code]});

    expect(order).toBeDefined();
    expect(order.customerCode).toBe(orderParams.customerCode);
    expect(order.totalAmount).toBe(orderParams.totalAmount);
    expect(order.status).toBe(orderParams.status);
  });

  it('should get orders', async () => {
    const product: Product = await Product.create<Product>(productParams);
    const order: Order = await service.createOrder({...orderParams, products: [product.code]});
    const orders: Order[] = await service.getOrders();

    expect(orders).toBeDefined();
    expect(orders.length).toBe(1);
  });

  it('should get order by code', async () => {
    const product: Product = await Product.create<Product>(productParams);
    const order: Order = await service.createOrder({...orderParams, products: [product.code]});
    const foundOrder: Order = await service.getOrderByCode(order.code);

    expect(foundOrder).toBeDefined();
    expect(foundOrder.code).toBe(order.code);
  });

  it('should update an order', async () => {
    const product: Product = await Product.create<Product>(productParams);
    const order: Order = await service.createOrder({...orderParams, products: [product.code]});
    const updatedOrder: Order = await service.updateOrderByCode(order.code, { status: 'PAID' });

    expect(updatedOrder).toBeDefined();
    expect(updatedOrder.code).toBe(order.code);
    expect(updatedOrder.status).toBe('PAID');
  });

  it('should delete an order', async () => {
    const product: Product = await Product.create<Product>(productParams);
    const order: Order = await service.createOrder({...orderParams, products: [product.code]});
    await service.deleteOrderByCode(order.code);
    const deletedOrder: Order = await service.getOrderByCode(order.code);

    expect(deletedOrder).toBeDefined();
  });
});