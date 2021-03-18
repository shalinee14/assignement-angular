import { Component, OnInit } from '@angular/core';
import { SelectService } from '../select.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  LoginForm: FormGroup;
  submitted = false;

  constructor(private selectService: SelectService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

   var x = localStorage.getItem('key');
  }
  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.LoginForm.invalid) {

      return;
    }

    let details = JSON.parse(localStorage.getItem('key')); // json object
    let loginFormData = this.LoginForm.value; // json

    if (details.email === loginFormData.email && details.password === loginFormData.password) {
      this.router.navigate(['dashboard']);
    }
    else{
      alert('Invalid');
    }

    console.log(localStorage.getItem('this.LoginForm.value'));
  }
}
