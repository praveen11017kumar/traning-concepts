import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm:any;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.signUpForm = this.formBuilder.group({
        firstName: ['',[Validators.required,Validators.minLength(8)]],
        lastName: ['',[Validators.required,Validators.minLength(10)]],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
        confirmPassword: ['', [Validators.required]]
      },{
        Validators: ConfirmPasswordValidator('password','confirmPassword')
      });
  }

  onSubmit():void{
    this.submitted = true;
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
