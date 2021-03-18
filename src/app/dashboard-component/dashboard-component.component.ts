import { Component, OnInit } from '@angular/core';
import { SignupComponentComponent } from '../signup-component/signup-component.component';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private selectService: SelectService) {  }

  ngOnInit() {
    // if (details.email === loginFormData.email && details.password === loginFormData.password) {
    //   this.router.navigate(['dashboard']);
    // }
    // else {
    //   alert('Invalid');
    // }
  }
  public studentDetails = JSON.parse(localStorage.getItem('key'));
  public storeValue = this.studentDetails.value;

  public countryName(id) {
    const countries = this.selectService.getCountries();
    const country = countries.find(c => c.id === parseInt(id));
    return country.name;
  }
  public stateName(id) {
    const states = this.selectService.getStates();
    const state = states.find(c => c.id === parseInt(id));
    return state.name;
  }
  public cityName(id) {
    const cities = this.selectService.getCities();
    const city = cities.find(c => c.id === parseInt(id));
    return city.name;
  }

}
