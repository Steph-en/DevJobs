import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobLocationsComponent } from '../../job-locations/job-locations.component';
import { JobLocation } from '../../interface/job-location';
import { AppService } from '../../services/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JobLocationsComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  jobLocationList: JobLocation[] = []

  appService: AppService = inject(AppService);

  filteredLocationList: JobLocation[] =[];

  // applForm = new FormGroup()

  constructor() {
    this.jobLocationList = this.appService.getAllJoblocations()
    this.filteredLocationList =this.jobLocationList;
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.jobLocationList;

    this.filteredLocationList = this.jobLocationList.filter(
      jobLocation => jobLocation?.company.toLowerCase().includes(text.toLowerCase())
    )
  }
}
