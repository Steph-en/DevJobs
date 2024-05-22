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
  jobLocationList: JobLocation[] = [];
  filteredLocationList: JobLocation[] = [];

  currentJob = 0;
  jobsToDisplay = 6;

  constructor(private appService: AppService) { }

  toggleFields() {
    const filters = document.querySelector(".backFilter") as HTMLElement;
    const index = document.querySelector(".job") as HTMLElement;

    if (filters && index) {
      filters.style.display = filters.style.display === 'block' ? 'none' : 'block';
      index.style.zIndex =  filters.style.display === 'block'  ? '-1' : '1';
    }
    console.log("Toggle execute");
  }

  toggleCheckmark() {
    const checkmark = document.querySelector('.checkmark');
    if (checkmark) {
      checkmark.classList.toggle('check');
    }
    console.log("Check active");
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
      if (this.currentJob < this.jobLocationList.length) {
        this.displayMoreJob()
      } else {
        console.log("No job left");
      }
      // this.filteredLocationList = jobLocations;
    });

    const input = document.querySelector('.input') as HTMLInputElement | null;

    if (input) {
      this.updatePlaceholder(input);
      // Update the placeholder text when the window is resized
      window.addEventListener('resize', () => this.updatePlaceholder(input));
    }
  }

  updatePlaceholder(input: HTMLInputElement) {
    if (window.innerWidth <= 1024) {
      input.placeholder = 'Filter by title...';
    } else {
      input.placeholder = 'Filter by title, companies, expertise…';
    }
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.jobLocationList;

    this.filteredLocationList = this.jobLocationList.filter(jobLocation => jobLocation.company.toLowerCase().includes(text.toLowerCase())
      || jobLocation.position.toLowerCase().includes(text.toLowerCase()) || jobLocation.location.toLowerCase().includes(text.toLowerCase())
      || jobLocation.contract.toLowerCase() == 'Full Time'
    )
    this.toggleFields();
    console.log(text);
  }
}
