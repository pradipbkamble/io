import { Component, OnInit } from '@angular/core';
import { Iproduct, cate } from '../interface/interface';

@Component({
  selector: 'app-produtinfo',
  templateUrl: './produtinfo.component.html',
  styleUrls: ['./produtinfo.component.scss']
})
export class ProdutinfoComponent implements OnInit {
  productname:string='';
  productinfo:string=''
  arry:Array<Iproduct>=[{
    productname:"abc",
    productinfo:"abcjhhd",
    categery:"product"
  }]
  constructor() { }

  ngOnInit(): void {
  }
  onproduct(categ:cate){
    let object1:Iproduct={
      productname:this.productname,
      productinfo:this.productinfo,
      categery:categ
    }
    if(!Object.values(object1).includes("")){
        console.log(object1);
        this.arry.push(object1);
        this.productname=''
      this.productinfo=''
    }
     

  }
}
