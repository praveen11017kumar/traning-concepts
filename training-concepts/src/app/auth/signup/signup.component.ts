import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ConfirmPasswordValidator } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm:any;
  submitted = false;
  error_message ='';

  constructor(private formBuilder: FormBuilder, private router: Router,
            private storageService: StorageService){}

  ngOnInit(){
    this.signUpForm = this.formBuilder.group({
        firstName: ['suhaas123',[Validators.required,Validators.minLength(8)]],
        lastName: ['akhil123423',[Validators.required,Validators.minLength(10)]],
        email: ['vamsi@gmail.com', [Validators.required,Validators.email]],
        password: ['A123a@123', [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
        confirmPassword: ['A123a@123', [Validators.required]]
      },{
        Validators: ConfirmPasswordValidator('password','confirmPassword')
      });
  }

  onSubmit(): void {
    this.submitted = true;
    let existingUserList = [];
    if (this.signUpForm.valid) {
      let encryptedExistingUserList = this.storageService.getLocalStorageData('register');
      if (encryptedExistingUserList) {
        existingUserList = JSON.parse(atob(encryptedExistingUserList));
        let isExists = existingUserList?.find((rec: any) => rec.email === this.signUpForm.value.email);
        if(!isExists){
          existingUserList.push(this.signUpForm.value);
          this.error_message = '';
          this.storageService.setLocalStorageData('register', btoa(JSON.stringify(existingUserList)));
          this.router.navigate(['auth/login']);
        }else{
          this.error_message = 'Email already exists.'
        }
      } else {
        existingUserList.push(this.signUpForm.value);
        this.error_message = '';
        this.storageService.setLocalStorageData('register', btoa(JSON.stringify(existingUserList)));
        this.router.navigate(['auth/login']);
      }

    }
  }

  onReset():void{
    // this.signUpForm.controls.email.setValue('pk');
    // this.signUpForm.patchValue({
    //   'firstName':'vamsi',
    //   'lastName':'suhas'
    // });
    this.signUpForm.controls.email.markAsDirty();
    console.log(this.signUpForm)

    // this.signUpForm.reset();
  }
}
