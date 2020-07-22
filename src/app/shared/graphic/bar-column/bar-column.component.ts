import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphic-bar-column',
  templateUrl: './bar-column.component.html',
  styleUrls: ['./bar-column.component.scss']
})
export class BarColumnDltComponent implements OnInit {
  @Input() dataBarColumn: any;

  highcharts = Highcharts;

  dataChartBarColumn: any;

  chartOptionsBarColumn: any;
  constructor() {}

  ngOnInit() {
    this.dataChartBarColumn = this.dataBarColumn;
    this.chartOptionsBarColumn = {
      chart: {
        type: 'column'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      title: {
        text: 'Ambientes',
        align: 'center',
        floating: true
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
      },
      series: this.dataChartBarColumn
    };
  }
}
