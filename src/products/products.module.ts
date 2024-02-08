import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';

import { ProductsService } from './products.service';

import { productsProviders } from './products.provider';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    ...productsProviders,
    ProductsService
  ],
  exports: [ProductsService],
})
export class ProductsModule { }