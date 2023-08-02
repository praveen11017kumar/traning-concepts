import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm | undefined;
  loginData: any;
  submitted = false;
  error_message ='';
  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.loginData = {
      email: 'vamsi@gmail.com',
      password: 'A123a@123',
      rememberMe: true
    };
  }

  navigateToSignup() {
    this.router.navigate(['auth/signup']);
  }

  onSubmit(loginForm: any) {
    this.submitted = true;
    let userDetailsList = [];
    console.log(loginForm);
    if (this.loginData.email && this.loginData.password) {
      let userDataInStr = this.storageService.getLocalStorageData('register');
      if (userDataInStr) {
        userDetailsList = JSON.parse(atob(userDataInStr));
        let isExists = userDetailsList.findIndex((rec: any) =>  rec.email === this.loginData.email && rec.password === this.loginData.password )
        if (isExists != -1) {
          this.storageService.isLoggedIn = true;
          if(this.storageService.reDirectPath){
            this.router.navigate([this.storageService.reDirectPath]);
          }else{
            this.router.navigate(['dashboard/prerequite-jscript']);
          }
        }else{
          this.storageService.isLoggedIn = false;
          this.error_message = "Invalid credentials."
        }
      }
    }
  }
}
