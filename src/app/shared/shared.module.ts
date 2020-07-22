import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailComponent } from './detail/detail.component';
import { GraphicModule } from './graphic/graphic.module';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    GraphicModule
  ],
  declarations: [DetailComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DetailComponent,
    GraphicModule
  ]
})
export class SharedModule {}
