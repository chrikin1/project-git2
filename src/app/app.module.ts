import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ApiService } from './api-http/api.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
 providers:[ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
