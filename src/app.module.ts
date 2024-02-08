import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import * as databaseConfig from '../database/config';
import { modelsArray } from './models';

import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const config = new ConfigService();
const environmentName = config.get<string>('NODE_ENV') || 'development';
const databaseOptions = databaseConfig[environmentName];

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...databaseOptions,
      models: modelsArray,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    ConfigService, 
    AppService
  ],
})
export class AppModule { }