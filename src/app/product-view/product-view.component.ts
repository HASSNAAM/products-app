import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  id!:number;

  product!: Observable<Products>;

  constructor(
     private route :ActivatedRoute ,
     private pservcse :ProductService 
  ){

  }
  ngOnInit(): void {
   
    this.id = Number(this.route.snapshot.params['id']);

    this.product =  this.pservcse.getproductbyidra(this.id);

  }

}
