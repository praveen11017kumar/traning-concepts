import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  isLoggedIn = false;
  reDirectPath = '';
  userLocation$ = new BehaviorSubject('India');

  constructor() { }

  public setLocalStorageData(key:string, data:any){
    window.localStorage.setItem(key, data);
  }

  public getLocalStorageData(key:string){
    return window.localStorage.getItem(key);
  }
}
