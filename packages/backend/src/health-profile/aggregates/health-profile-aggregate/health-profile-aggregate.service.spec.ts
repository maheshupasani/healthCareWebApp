import { Test, TestingModule } from '@nestjs/testing';
import { HealthProfileAggregateService } from './health-profile-aggregate.service';

describe('HealthProfileAggregateService', () => {
  let service: HealthProfileAggregateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthProfileAggregateService],
    }).compile();

    service = module.get<HealthProfileAggregateService>(HealthProfileAggregateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
