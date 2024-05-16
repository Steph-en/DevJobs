import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  toggleCheckmark() {
    const checkmark = document.querySelector('.checkmark');
    if (checkmark) {
      checkmark.classList.toggle('check');
    }
  }

  jobLocationList: JobLocation[] = []
  filteredLocationList: JobLocation[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAllJoblocations().subscribe((jobLocations: JobLocation[]) => {
      this.jobLocationList = jobLocations;
      this.filteredLocationList = jobLocations;

    });
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.jobLocationList;

    this.filteredLocationList = this.jobLocationList.filter(
      jobLocation => jobLocation?.company.toLowerCase().includes(text.toLowerCase()) 
      || jobLocation?.position.toLowerCase().includes(text.toLowerCase())  || jobLocation?.location.toLowerCase().includes(text.toLowerCase())
    )
  }
}
