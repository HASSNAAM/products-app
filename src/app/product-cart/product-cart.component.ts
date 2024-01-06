import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {


  
  productscart! : Products[];


  constructor (

    private Cservice:CartService,
  ){}
  ngOnInit(): void {
  

    this.productscart =   this.Cservice.getcartitem();


  }

  remove(id:number){

    this.Cservice.removeitem(id);
  }

}
