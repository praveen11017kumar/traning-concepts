import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient) { }

  getUsersList():Observable<any>{
   return this.http.get(this.baseUrl+'/employees');
  }

  getUserById(id:any):Observable<any>{
   return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  updateUser(userDetails:any, id:string){
      return this.http.put(`${this.baseUrl}/update/${id}`,userDetails)
  }

}
