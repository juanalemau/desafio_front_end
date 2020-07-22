import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';

import { BarDltComponent } from './bar/bar.component';
import { BarColumnDltComponent } from './bar-column/bar-column.component';
import { BarLineDltComponent } from './bar-line/bar-line.component';
import { PieDltComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  declarations: [
    BarDltComponent,
    BarColumnDltComponent,
    BarLineDltComponent,
    PieDltComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BarDltComponent,
    BarColumnDltComponent,
    BarLineDltComponent,
    PieDltComponent,
    HighchartsChartModule
  ]
})
export class GraphicModule {}
