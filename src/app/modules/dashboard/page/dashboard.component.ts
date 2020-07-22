import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Detail
  dashboardResponse: any;
  detailData: any;
  graphData: any;

  // Loading
  viewLoading: boolean = false;

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.viewLoading = true;
    this.service.getDashboard().subscribe((data) => {
      this.dashboardResponse = data;
      this.detailData = this.dashboardResponse.detail;
      this.graphData = this.dashboardResponse.graph;
      this.viewLoading = false;
      console.log(this.dashboardResponse);
    });
  }
}
