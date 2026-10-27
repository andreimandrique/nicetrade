import { Test, TestingModule } from '@nestjs/testing';
import { KlineController } from './kline.controller.js';
import { KlineService } from './kline.service.js';

describe('KlineController', () => {
  let controller: KlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KlineController],
      providers: [KlineService],
    }).compile();

    controller = module.get<KlineController>(KlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
