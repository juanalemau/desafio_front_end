import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphic-bar-line',
  templateUrl: './bar-line.component.html',
  styleUrls: ['./bar-line.component.scss']
})
export class BarLineDltComponent implements OnInit {
  @Input() dataBarLine: any;
  @Input() categoriesBarLine: any;

  highcharts = Highcharts;

  dataChartBarLine: any;

  chartOptionsBarLine: any;

  constructor() {}

  ngOnInit() {
    this.dataChartBarLine = this.dataBarLine;
    this.chartOptionsBarLine = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        crosshair: true
      },
      yAxis: [
        {
          // Primary yAxis
          title: {
            text: ''
          }
        },
        {
          // Secondary yAxis
          title: {
            text: ''
          },
          opposite: true
        }
      ],
      series: this.dataChartBarLine
    };
  }
}
