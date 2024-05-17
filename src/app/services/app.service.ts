import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobLocation } from '../interface/job-location';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private jobLocationList = '/assets/data.json';
  
  constructor(private http: HttpClient) { }

  public getAllJoblocations(): Observable<JobLocation[]> {
    return this.http.get<JobLocation[]>(this.jobLocationList);
  }
  
  public getJobById(id: number): Observable<JobLocation | undefined> {
    return this.getAllJoblocations().pipe(
      map((jobLocation: JobLocation[]) => jobLocation.find(jobLocation => jobLocation.id === id))
    );
  }
}
