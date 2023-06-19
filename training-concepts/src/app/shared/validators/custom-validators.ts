import { AbstractControl, FormGroup } from "@angular/forms";


export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName]; //password
      let matchingControl = formGroup.controls[matchingControlName]; //confirm password
      console.log("sS");
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

