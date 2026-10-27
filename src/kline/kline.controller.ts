import { Controller, Get, Post, Body } from '@nestjs/common';
import { KlineService } from './kline.service.js';
import { CreateKlineDto } from './dto/create-kline.dto.js';

@Controller('kline')
export class KlineController {
  constructor(private readonly klineService: KlineService) {}

  @Post()
  create(@Body() createKlineDto: CreateKlineDto) {
    return this.klineService.create(createKlineDto);
  }

  @Get()
  findAll() {
    return this.klineService.findAll();
  }
}