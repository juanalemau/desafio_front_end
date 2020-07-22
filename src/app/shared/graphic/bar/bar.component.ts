import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarDltComponent implements OnInit {
  @Input() dataBar: any;
  @Input() categoriesBar: any;

  highcharts = Highcharts;

  data: any;

  chartOptionsBar: any;

  constructor() {}

  ngOnInit() {
    this.data = this.dataBar;
    this.chartOptionsBar = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categoriesBar
      },
      yAxis: {
        min: 0
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: this.data
    };
  }
}
