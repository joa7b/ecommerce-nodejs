import { Controller, Get, Post, Body, Put, Delete, UnprocessableEntityException, Param } from '@nestjs/common';

import { Product } from './models/product.model';

import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async createProduct(
    @Body() createProductDto: any
  ): Promise<Product> {
    try {
      return await this.productsService.createProduct(createProductDto);
    } catch (error) {
      throw new UnprocessableEntityException(error.message)
    }
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    try {
      return await this.productsService.getProducts();
    } catch (error) {
      throw new UnprocessableEntityException(error.message)
    }
  }

  @Get(':code')
  async getProduct(
    @Param() code: number
  ): Promise<Product> {
    try {
      return await this.productsService.getProductByCode(code);
    } catch (error) {
      throw new UnprocessableEntityException(error.message)
    }
  }

  @Put(':code')
  async updateProduct(
    @Body() updateProductDto: any,
    @Param('code') code: number,
  ): Promise<Product> {
    try {
      return await this.productsService.updateProductByCode(code, updateProductDto);
    } catch (error) {
      throw new UnprocessableEntityException(error.message)
    }
  }

  @Delete(':code')
  async deleteProduct(
    @Param('code') code: number,
  ): Promise<void> {
    try {
      return await this.productsService.deleteProductByCode(code);
    } catch (error) {
      throw new UnprocessableEntityException(error.message)
    }
  }
}