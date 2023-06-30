import { Component } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-jscripts-list',
  templateUrl: './jscripts-list.component.html',
  styleUrls: ['./jscripts-list.component.scss']
})
export class JscriptsListComponent {

  location:any;
  constructor(private storageService: StorageService){

  }

  ngOnInit(){
    this.storageService.userLocation$.subscribe((res)=>{
      console.log(res);
      this.location = res;
    });
  }
}
