import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';

import { OrdersService } from './orders.service';

import { ordersProviders } from './orders.provider';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [OrdersController],
  providers: [
    ...ordersProviders,
    OrdersService
  ],
  exports: [OrdersService],
})
export class OrdersModule { }