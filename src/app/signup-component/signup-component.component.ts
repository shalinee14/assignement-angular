import { Component, OnInit } from '@angular/core';
import { SelectService } from '../select.service';
import { Country } from '../country';
import { State } from '../state';
import { City } from '../city';
import { FormGroup, FormBuilder,  FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent implements OnInit {
  Courses = ['Maths', 'Science',
    'Art', 'Commerce'];

  selectedCountry: Country = new Country(2, 'Brazil');
  selectedState: Country = new State(2, 1, 'Alaska');
  selectedCity: Country = new City(2, 1, 'Alaska');
  countries: Country[];
  states: State[];
  cities: City[];

  registerForm: FormGroup;
  submitted = false;

  constructor(private selectService: SelectService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {

    this.countries = this.selectService.getCountries();
    this.cities = this.selectService.getCities();
    this.onSelect(this.selectedCountry.name);
    this.onSelectCity(this.selectedCountry.id && this.selectedState.id);

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
       courses: new FormControl(['',]),
      country: new FormControl(['',]),
      state: new FormControl(['',]),
      city: new FormControl(['',]),
    });
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }
  onSelectCity(cityid) {
    this.cities = this.selectService.getCities().filter((item) => item.cityid == cityid);
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    localStorage.setItem('key', JSON.stringify(this.registerForm.value));
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    this.router.navigate(['login']);

  }

}
