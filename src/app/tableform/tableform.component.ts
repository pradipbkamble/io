import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../interface/interface';

@Component({
  selector: 'app-tableform',
  templateUrl: './tableform.component.html',
  styleUrls: ['./tableform.component.scss']
})
export class TableformComponent implements OnInit {
@Input() getstddata!:Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }
  
}
