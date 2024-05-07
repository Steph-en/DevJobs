import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobLocationsComponent } from '../../job-locations/job-locations.component';
import { JobLocation } from '../../interface/job-location';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JobLocationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  jobLocationList: JobLocation[] = []

  appService: AppService = inject(AppService);

  constructor() {
    this.jobLocationList = this.appService.getAllJoblocations()
  }
}
