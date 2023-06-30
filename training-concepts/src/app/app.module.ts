import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: AppInterceptor,
    multi: true
  } ,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
