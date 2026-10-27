import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration.js';
import { KlineModule } from './kline/kline.module.js';
import { Kline } from './kline/entities/kline.entity.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.development.env'],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.getOrThrow('database.host'),
        port: config.getOrThrow('database.port'),
        username: config.getOrThrow('database.username'),
        password: config.getOrThrow('database.password'),
        database: config.getOrThrow('database.database'),
        entities: [Kline],
        synchronize: !config.getOrThrow('isProduction'),
      }),
    }),
    KlineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}