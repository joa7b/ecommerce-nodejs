import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import * as databaseConfig from '../database/config';
import { modelsArray } from './models';

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
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule { }