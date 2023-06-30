import { Component } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  location:any;
  locationList = ['India', 'US'];

  constructor(private storageService: StorageService){

  }

  ngOnInit(){
    this.storageService.userLocation$.subscribe(res =>{
      console.log(res);
      this.location = res;
    })
  }

  selectChange(event:any){
    this.location = event;
    this.storageService.userLocation$.next(this.location);
  }
}
