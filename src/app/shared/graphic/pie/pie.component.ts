import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphic-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieDltComponent implements OnInit {
  @Input() dataPie: any;

  highcharts = Highcharts;

  dataCharPie: any;

  chartOptionsPie: any;

  constructor() {}

  ngOnInit() {
    console.log(this.dataCharPie);
    this.dataCharPie = this.dataPie;
    this.chartOptionsPie = {
      chart: {
        type: 'pie'
      },
      plotOptions: {
        pie: {
          innerSize: '60%',
          size: '60%',
          startAngle: 90
        }
      },
      title: {
        text: '99 APIs',
        verticalAlign: 'middle',
        align: 'center',
        floating: true,
        style: {
          fontSize: '18px'
        }
      },
      series: this.dataCharPie
    };
  }
}
