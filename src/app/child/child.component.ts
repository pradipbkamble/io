import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input()msgfromparent!:string
  
  msg:string="yes yes "
@Output()toparent:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
   
  }
  sendmsg(event:Event){
    console.log(event)
    this.toparent.emit(this.msg)
  }
}
