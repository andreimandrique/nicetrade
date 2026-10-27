import { PartialType } from '@nestjs/mapped-types';
import { CreateKlineDto } from './create-kline.dto.js';

export class UpdateKlineDto extends PartialType(CreateKlineDto) {}
