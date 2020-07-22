import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { DashboardRoutes } from './dashboard-routing.module';
import { DashboardComponent } from './page/dashboard.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutes,
    SharedModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ]
})
export class DashboardModule {}
