import { Controller, Get, Post, Body, Put, Delete, UnprocessableEntityException, Param, Query } from '@nestjs/common';

import { Order } from './models/order.model';

import { OrdersService } from './orders.service';

@Controller('api/orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) { }

  @Post()
  async createOrder(
    @Body() createOrderDto: any
  ): Promise<Order> {
    try {
      return this.ordersService.createOrder(createOrderDto);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  @Get()
  async getOrders(): Promise<Order[]> {
    try {
      return this.ordersService.getOrders();
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  @Get(':code')
  async getOrder(
    @Param() code: number
  ): Promise<Order> {
    try {
      return this.ordersService.getOrderByCode(code);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  @Put(':code')
  async updateOrder(
    @Body() updateOrderDto: any,
    @Param('code') code: number,
  ): Promise<Order> {
    try {
      return this.ordersService.updateOrderByCode(code, updateOrderDto);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  @Put(':code/products')
  async updateOrderProducts(
    @Param('code') code: number,
    @Query('products') products: number[],
  ): Promise<Order> {
    try {
      return this.ordersService.updateOrderProductsByCode(code, products);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  @Delete(':code')
  async deleteOrder(
    @Param('code') code: number,
  ): Promise<void> {
    try {
      return this.ordersService.deleteOrderByCode(code);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}