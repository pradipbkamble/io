import { Component, OnInit } from '@angular/core';
import { Istd } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // fromparent="angular is easier than js"
  // toparent!:string
stdarry:Array<Istd>=[{
  fname : 'john',
  lname : 'shipman',
  email : 'jd@gmail.com',
  contact : 1234456

}]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
   
  }
  getstddata(obj:Istd){
  this.stdarry.push(obj)
  }
  
  fromchild(eve:string){
    console.log(eve)
  }


}