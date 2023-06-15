import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    firstName: new FormControl('suhas', [Validators.required,Validators.minLength(5)]),
    lastName: new FormControl('vamsi',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('akhil',[Validators.required,Validators.minLength(5)]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  });


  constructor(){}

  onSubmit():void{
    if(this.signUpForm.valid){
      alert("form submitted")
    }
    console.log(this.signUpForm)
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
