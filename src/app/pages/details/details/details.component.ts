import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app.service';
import { JobLocation } from '../../../interface/job-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // jobLocationId = 0;
  appService = inject(AppService);
  jobLocation: JobLocation | undefined;


  constructor() {
    const jobLocationId = Number(this.route.snapshot.params['id']);
    this.jobLocation = this.appService.getJobLocationById(jobLocationId);
  }
}
