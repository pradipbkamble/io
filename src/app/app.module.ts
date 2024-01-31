import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewchildComponent } from './newchild/newchild.component';
import { ChildComponent } from './child/child.component';
import { StdformComponent } from './stdform/stdform.component';
import { TableformComponent } from './tableform/tableform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutinfoComponent } from './produtinfo/produtinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    NewchildComponent,
    ChildComponent,
    StdformComponent,
    TableformComponent,
    ProdutinfoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
