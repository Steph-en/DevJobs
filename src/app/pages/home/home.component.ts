import { Component, OnInit, inject } from '@angular/core';
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
  jobLocationList: JobLocation[] = [];
  filteredLocationList: JobLocation[] = [];
  
  currentJob = 0;
  jobsToDisplay = 9;

  constructor(private appService: AppService) {}

  toggleCheckmark() {
    const checkmark = document.querySelector('.checkmark');
    if (checkmark) {
      checkmark.classList.toggle('check');
    }
    console.log("hello");
  }

  displayMoreJob() {
    const nextJob = this.currentJob + this.jobsToDisplay;

    this.filteredLocationList = [...this.filteredLocationList, ...this.jobLocationList.slice(this.currentJob, nextJob)];
    this.currentJob = nextJob;

    console.log(this.currentJob);
  }

  noJobsLeft() {
    return this.currentJob < this.jobLocationList.length;
  }

  ngOnInit(): void {
    this.appService.getAllJoblocations().subscribe((jobLocations: JobLocation[]) => {
      this.jobLocationList = jobLocations;
      if(this.currentJob < this.jobLocationList.length) {

        this.displayMoreJob()
      } else {
        console.log("No job left");
      }

      // this.filteredLocationList = jobLocations;
    });
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.jobLocationList;

    this.filteredLocationList = this.jobLocationList.filter(
      jobLocation => jobLocation.company.toLowerCase().includes(text.toLowerCase()) || jobLocation.position.toLowerCase().includes(text.toLowerCase())  
      || jobLocation.location.toLowerCase().includes(text.toLowerCase()) || jobLocation.contract === 'Full Time'
    )
    console.log(text);
    
  }
}
