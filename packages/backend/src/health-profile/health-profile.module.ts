import { Module } from '@nestjs/common';
import { HealthProfileController } from './controllers/health-profile/health-profile.controller';
import { HealthProfileAggregateService } from './aggregates/health-profile-aggregate/health-profile-aggregate.service';

@Module({
  controllers: [HealthProfileController],
  providers: [HealthProfileAggregateService]
})
export class HealthProfileModule {}
