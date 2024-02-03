import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) { }

  async getHealth(): Promise<string> {
    try {
      await this.sequelize.authenticate();
      return 'healthy';
    } catch (error) {
      throw new ServiceUnavailableException('unhealthy');
    }
  }
}