import { Test, TestingModule } from '@nestjs/testing';
import { Sequelize } from 'sequelize-typescript';

import { testDatabase } from '../test/test-database';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [testDatabase],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('root', () => {
    it('should return "healthy!"', async () => {
      jest.spyOn(Sequelize.prototype, 'authenticate').mockResolvedValueOnce();
      expect(await appController.getHealth()).toBe('healthy');
    });
  });
});