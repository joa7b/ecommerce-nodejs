import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { testDatabase } from './test-database';

import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

import { ProductsModule } from '../src/products/products.module';
import { OrdersModule } from '../src/orders/orders.module';

export async function testModule(): Promise<TestingModule> {
  return await Test.createTestingModule({
    imports: [
      testDatabase,
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      ProductsModule,
      OrdersModule,
    ],
    controllers: [AppController],
    providers: [ConfigService, AppService],
  }).compile();
}
