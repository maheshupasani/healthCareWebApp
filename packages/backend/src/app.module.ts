import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { connectTypeORM, DEFAULT } from './constant/typeorm.connection';
import { HealthProfileModule } from './health-profile/health-profile.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: DEFAULT,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: connectTypeORM,
    }),
    AuthModule,
    HealthProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
