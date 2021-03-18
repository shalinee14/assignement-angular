import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { DashboardComponent } from './dashboard-component/dashboard-component.component';
import { AuthGuard } from './auth.guard';
import { DashboardModule } from './dashboard-component/dashboard.module';
import { AuthguradServiceService } from './authgurad-service.service';

const routes: Routes = [
  { path: 'signup', component: SignupComponentComponent},
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthguradServiceService],
    loadChildren: () => import('./dashboard-component/dashboard.module').then(m => m.DashboardModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
