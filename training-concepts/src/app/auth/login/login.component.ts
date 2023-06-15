import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sampleTest ="das";
  @ViewChild('loginForm') loginForm: NgForm | undefined;
 
  loginData:any;
  submitted = false;
  preview: string = '';
  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
 

  constructor(private router: Router){}

  ngOnInit() {
    this.loginData = { 
      username: '',
      password: '',
      rememberMe: true
    };
 
  }

  navigateToSignup(){
    this.router.navigate(['auth/signup']);
  }

  onSubmit(loginForm:any) {
    this.submitted =true;
    console.log(loginForm);
    if(this.loginData.username && this.loginData.password){
      this.router.navigate(['dashboard/prerequite-jscript']);
    }
  }
}
