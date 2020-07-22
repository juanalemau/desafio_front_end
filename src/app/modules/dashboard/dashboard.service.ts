import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private REST_API_SERVER = 'http://localhost:3000/deloitte/api';

  constructor(private httpClient: HttpClient) {}

  public getDashboard() {
    return this.httpClient.get(this.REST_API_SERVER + '/dashboard');
  }
}
