import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientHealthInfoResponse } from '../../core/model/HealthProfile.model';
import { environment } from '../../../environments/environment';
import { GET_PATIENT_HEALTH_INFO } from '../../core/constants/api-endpoint';

@Injectable({
  providedIn: 'root',
})
export class HealthProfileService {
  constructor(private readonly http: HttpClient) {}

  getPatientHealthInfo() {
    const url = environment.APIURL + GET_PATIENT_HEALTH_INFO;

    return this.http.get<PatientHealthInfoResponse>(url);
  }
}
