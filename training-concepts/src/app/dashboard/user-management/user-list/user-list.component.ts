import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userInfoForm:any;
  showUserDetailsForm = false;
  userId:any;
  
  constructor(private usersService: UsersService,private formBuilder: FormBuilder){ }
  
  userList=[{
    id:'',
    employee_name:'',
    employee_salary:'',
    employee_age:''
  }];

  ngOnInit(){
    this.userList = [];
    this.userInfoForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(8)]],
      salary: ['',[Validators.required,Validators.minLength(10)]],
      age: ['', [Validators.required,Validators.email]],
    });
    this.getUserList();
  }

  getUserList(){
    this.usersService.getUsersList().subscribe(res =>{
      console.log(res);
      this.userList = res.data;
    },(err)=>{
      alert(err.error.message);
    });
  }

  onEditClick(user:any){
   this.showUserDetailsForm = true;
   this.userId = user.id;
   this.usersService.getUserById(user.id).subscribe((res)=>{
    console.log(res);
    this.patchValuesToForm(res?.data)
   },(err:any)=>{
      console.log(err);
      this.patchValuesToForm(user);
      alert(err.error.message);
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
      alert(err.error.message);
    })
  }

  onReset(){
  }

  

}
