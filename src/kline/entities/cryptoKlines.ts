import 'reflect-metadata';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CryptoAsset } from './cryptoAssets.js';

@Entity({ name: 'crypto_kline' })
export class CryptoKlines {
  @PrimaryColumn({ type: 'timestamp' })
  time!: Date;

  @PrimaryColumn({ type: 'text' })
  symbol!: string;

  @PrimaryColumn({ type: 'text' })
  interval!: string;

  @Column({ type: 'double precision' })
  open!: number;

  @Column({ type: 'double precision' })
  high!: number;

  @Column({ type: 'double precision' })
  low!: number;

  @Column({ type: 'double precision' })
  close!: number;

  @Column({ type: 'numeric' })
  volume!: string;

  @ManyToOne(() => CryptoAsset, (asset) => asset.klines, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'symbol', referencedColumnName: 'symbol' })
  asset!: CryptoAsset;
}
