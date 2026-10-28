export class CreateKlineDto {
  time: Date;
  symbol: string;
  interval: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: string;
}
