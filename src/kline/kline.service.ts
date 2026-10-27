import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreateKlineDto } from './dto/create-kline.dto.js';
import { Kline } from './entities/kline.entity.js';

@Injectable()
export class KlineService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  private get klinesRepository() {
    return this.dataSource.getRepository(Kline);
  }

  create(createKlineDto: CreateKlineDto) {
    const kline = this.klinesRepository.create({
      time: new Date(createKlineDto.time),
      symbol: createKlineDto.symbol,
      interval: createKlineDto.interval,
      open: createKlineDto.open,
      high: createKlineDto.high,
      low: createKlineDto.low,
      close: createKlineDto.close,
      volume: createKlineDto.volume,
    });

    return this.klinesRepository.save(kline);
  }

  findAll() {
    return this.klinesRepository.find({ order: { time: 'DESC' } });
  }
}