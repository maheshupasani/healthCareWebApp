import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

@Injectable()
export class HealthProfileAggregateService {
  getPatientHealthInfo() {
    return of({
      Timestamp: Date.now(),
      PersonalInfo: {
        Name: 'John Doe',
        Email: 'john.doe@gmail.com',
        Phone: '9876543210',
        Age: '25 years',
      },
      MedicalCondition: {
        HeartDisease: false,
        Diabetics: true,
        BloodPressure: {
          HighBP: true,
          LowBP: false,
        },
      },
      HealthStatus: {
        Height: '175 cms',
        Weight: '65 kg',
        PulseRate: '88 bpm',
        BP: '120/160',
        BMI: 25,
      },
    });
  }
}
