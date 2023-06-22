import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setLocalStorageData(key:string, data:any){
    window.localStorage.setItem(key, data);
  }

  public getLocalStorageData(key:string){
    return window.localStorage.getItem(key);
  }
}
