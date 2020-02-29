import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListuserComponent } from './listuser/listuser.component';
import { FormsModule } from '@angular/forms';
import { DetailuserComponent } from './detailuser/detailuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    DetailuserComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
