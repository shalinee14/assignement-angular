import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguradServiceService } from '../authgurad-service.service';
import { DashboardComponent } from './dashboard-component.component';
import { DashboardModule } from './dashboard.module';

@NgModule({
  imports: [
  RouterModule,
  DashboardModule,
  DashboardComponent,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthguradServiceService]
      }
  ]),


],
  exports: [RouterModule],
  providers: [AuthguradServiceService],
})
export class DashboardRoutingModule { }
