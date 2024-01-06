import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products! : Products[];


  //firstwar var here
  constructor( 
    //second var constructor 
    private pservice :ProductService ,
    private Cservice:CartService

       ){

  //  first wary  load them here
  }

  ngOnInit(): void {
      //second var load here
      this.pservice.getproduct().subscribe((data :Products[] )=> { this.products = data });

  }

  addtocart( product:Products){

    this.Cservice.addtocart(product) ;
    console.log(product);
  }

}
