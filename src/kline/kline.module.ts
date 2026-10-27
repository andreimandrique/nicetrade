import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KlineService } from './kline.service.js';
import { KlineController } from './kline.controller.js';
import { Kline } from './entities/kline.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Kline])],
  controllers: [KlineController],
  providers: [KlineService],
})
export class KlineModule {}