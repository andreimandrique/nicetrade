import 'reflect-metadata';
import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { CryptoKlines } from './cryptoKlines.js';

@Entity('crypto_assets')
export class CryptoAsset {
  @PrimaryColumn({ type: 'text' })
  symbol!: string;

  @Column({ type: 'text' })
  name!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @OneToMany(() => CryptoKlines, (kline) => kline.asset)
  klines!: CryptoKlines[];
}
