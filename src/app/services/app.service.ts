import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobLocation } from '../interface/job-location';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private jobsUrl = '/assets/data.json';

  constructor(private http: HttpClient) { }

  public getjobsUrl(): Observable<JobLocation[]> {
    return this.http.get<JobLocation[]>(this.jobsUrl);
  }
}
