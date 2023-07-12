import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Observable, Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userInfoForm:any;
  showUserDetailsForm = false;
  userId:any;
  userLocation:string | undefined;
  
  constructor(private usersService: UsersService,
    private formBuilder: FormBuilder,
    private storageService: StorageService){ }
  
  userList:Observable<any> | undefined;

  userDetailsSubscription: Subscription | undefined;
  locationSubscription: Subscription | undefined;
  userIdSubscription : Subscription | undefined;
  currDate: Date | undefined;

  ngOnInit(){
    this.userInfoForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(8)]],
      salary: ['',[Validators.required,Validators.minLength(10)]],
      age: ['', [Validators.required,Validators.email]],
    });

    this.currDate = new Date();
    this.locationSubscription = this.storageService.userLocation$.subscribe((res)=>{
      this.userLocation = res;
    });
    
    this.getUserList();
  }

  getUserList(){
   this.userList =  this.usersService.getUsersList();
   let date = moment(this.currDate).format('DD/MM/yyyy');
   console.log(date);
  }

  onEditClick(user:any){
   this.showUserDetailsForm = true;
   this.userId = user.id;
   this.userIdSubscription = this.usersService.getUserById(user.id).subscribe((res)=>{
    console.log(res);
    this.patchValuesToForm(res?.data)
   },(err:any)=>{
      console.log(err);
      this.patchValuesToForm(user);
   })
  }

  patchValuesToForm(user:any){
    this.userInfoForm.patchValue({
      username: user.employee_name,
      salary: user.employee_salary,
      age: user.employee_age
    })
  }

  onSubmit(){
    let userData = {
      name: this.userInfoForm.controls['username'].value,
      salary: this.userInfoForm.controls['salary'].value,
      age: this.userInfoForm.controls['age'].value
    };
    this.usersService.updateUser(userData, this.userId).subscribe((res:any)=>{
      this.getUserList();
      this.showUserDetailsForm = false;
      this.userId = '';
    },(err:any)=>{
      this.getUserList();
      this.showUserDetailsForm = false;
      this.userId = '';
      alert(err);
    })
  }

  onReset(){
  }

  ngOnDestroy(){
    this.userDetailsSubscription?.unsubscribe();
    this.locationSubscription?.unsubscribe();
    this.userIdSubscription?.unsubscribe();
  }
  

}
