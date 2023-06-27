import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  
  constructor(private usersService: UsersService){ }
  
  userList=[{
    id:'',
    employee_name:'',
    employee_salary:'',
    employee_age:''
  }];

  ngOnInit(){
    this.userList = [];
    this.getUserList();
  }

  getUserList(){
    this.usersService.getUsersList().subscribe(res =>{
      console.log(res);
      this.userList = res.data;
    },(err)=>{
      console.log(err);
      alert(err.error.message);
    });
  }


}
