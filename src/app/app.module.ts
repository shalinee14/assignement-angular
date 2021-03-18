import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { DashboardComponent } from './dashboard-component/dashboard-component.component';
import { SelectService } from './select.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthguradServiceService } from './authgurad-service.service';
import { DashboardModule } from './dashboard-component/dashboard.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    CommonModule

  ],
  providers: [SelectService, AuthguradServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
