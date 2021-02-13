import { Controller, Get } from '@nestjs/common';
import { HealthProfileAggregateService } from 'src/health-profile/aggregates/health-profile-aggregate/health-profile-aggregate.service';

@Controller('healthProfile')
export class HealthProfileController {
  constructor(
    private readonly healthProfileAggregateService: HealthProfileAggregateService,
  ) {}

  @Get('/getPatientHealthInfo')
  async getPatientHealthInfo() {
    return await this.healthProfileAggregateService.getPatientHealthInfo();
  }
}
