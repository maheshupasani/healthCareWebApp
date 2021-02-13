export interface PatientHealthInfoResponse {
  Timestamp: string;
  PersonalInfo: PersonalInfo;
  MedicalCondition: MedicalCondtion;
  HealthStatus: HealthStatus;
}

export interface PersonalInfo {
  Name: string;
  Email: string;
  Phone: string;
  Age: string;
}

export interface MedicalCondtion {
  HeartDisease: boolean;
  Diabetics: boolean;
  BloodPressure: {
    HighBP: boolean;
    LowBP: boolean;
  };
}

export interface HealthStatus {
  Height: string;
  Weight: string;
  PulseRate: string;
  BP: string;
  BMI: number;
}
