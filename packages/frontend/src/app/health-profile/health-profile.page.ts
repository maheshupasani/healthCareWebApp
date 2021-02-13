import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { HealthProfileService } from '../services/health-profile/health-profile.service';
import { PatientHealthInfoResponse } from '../core/model/HealthProfile.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-health-profile',
  templateUrl: './health-profile.page.html',
  styleUrls: ['./health-profile.page.scss'],
})
export class HealthProfilePage implements OnInit {
  patientHealthInfo: PatientHealthInfoResponse;

  constructor(
    private readonly healthProfileService: HealthProfileService,
    private readonly toastController: ToastController,
    private readonly router: Router,
    private readonly loadingController: LoadingController,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.getPatientHealthInfo();
  }

  getPatientHealthInfo() {
    this.healthProfileService.getPatientHealthInfo().subscribe({
      next: async (res: PatientHealthInfoResponse) => {
        this.patientHealthInfo = res;
        console.log(this.patientHealthInfo);
      },
      error: async (err: any) => {
        if (err.error.statusCode === 403) {
          const toast = await this.toastController.create({
            message: 'Session Expired.Please login',
            duration: 2000,
          });
          toast.present();
          this.router.navigateByUrl('/');
        }
      },
    });
  }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Logging out',
    });
    await loading.present();

    this.authService.logout().subscribe({
      next: async (res) => {
        await loading.dismiss();
        localStorage.clear();
        this.router.navigateByUrl('/');
      },
      error: async (err) => {
        await loading.dismiss();
        const toast = await this.toastController.create({
          message: 'Something went wrong.',
          duration: 2000,
        });
        toast.present();
      },
    });
  }
}
