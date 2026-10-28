import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KlineService } from './kline.service.js';
import { KlineController } from './kline.controller.js';
import { CryptoKlines } from './entities/cryptoKlines.js';

@Module({
  imports: [TypeOrmModule.forFeature([CryptoKlines])],
  controllers: [KlineController],
  providers: [KlineService],
})
export class KlineModule {}
