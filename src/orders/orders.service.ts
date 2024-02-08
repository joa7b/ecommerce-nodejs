import { Injectable, Inject } from '@nestjs/common';

import { Order } from './models/order.model';
import { Product } from '../products/models/product.model';

import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
    @Inject(ProductsService)
    private productsService: ProductsService,
  ) { }

  async createOrder(createOrderDto: any): Promise<Order> {
    if (createOrderDto.totalAmount < 0) {
      throw new Error('Total amount must be greater than 0');
    };

    const order: Order = await this.ordersRepository.create<Order>({
      ...createOrderDto,
      status: 'PENDING',
    });
    const products: Product[] = await this.productsService.getProductsByCodes(createOrderDto.products);

    if (!products.length) {
      throw new Error('Products not found');
    }

    await order.setProducts(products);

    await order.save();

    return order;
  }

  async getOrders(): Promise<Order[]> {
    const orders: Order[] = await this.ordersRepository.findAll();

    for (const order of orders) {
      await order.reload({
        include: [{ association: 'products' }]
      });
    }
  
    return orders;
  }

  async getOrderByCode(code: number): Promise<Order> {
    return await this.ordersRepository.findOne({
      where: {
        code,
      }
    });
  }

  async updateOrderByCode(code: number, updateOrderDto: any): Promise<Order> {
    const order: Order = await this.ordersRepository.findOne({
      where: {
        code,
      }
    });

    if (!order) {
      throw new Error('Order not found');
    }

    return await order.update(updateOrderDto);
  }

  async deleteOrderByCode(code: number): Promise<void> {
    const order: Order = await this.ordersRepository.findOne({
      where: {
        code,
      }
    });

    if (!order) {
      throw new Error('Order not found');
    }

    return await order.destroy();
  }

  async updateOrderProductsByCode(code: number, productsCodes: number[]): Promise<Order> {
    const products: Product[] = await this.productsService.getProductsByCodes(productsCodes);
    if (products.length !== productsCodes.length) {
      throw new Error('Some products not found');
    }

    console.log('products',products);
  
    const order: Order = await this.ordersRepository.findOne({
      where: { code },
      include: [{ association: 'products' }],
    });
    if (!order) {
      throw new Error('Order not found');
    }

    console.log('order',order);
  
    await order.$set('products', []);

    await order.save();

    // Adiciona os novos produtos ao pedido
    await order.$add('products', products);

    // Salva as alterações no pedido
    await order.save();

    return order;
  }
}