import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.scss']
})
export class NewchildComponent implements OnInit {




@Input() GetmsgFromParent!:string

  constructor() { }

  ngOnInit(): void {
   
  }
 
}



