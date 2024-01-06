import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitem:Products[] = [];

  private cartitemcount = new BehaviorSubject<number>(0);

  realcartcount = this.cartitemcount.asObservable();

  constructor() { }

  addtocart(product:Products){

    this.cartitem.push(product);
    this.cartitemcount.next(this.cartitem.length);

  }

  getcartitem():Products[]
  {
  
    return this.cartitem;
  }


  removeitem(id: number)
  {
   const index=this.cartitem.findIndex((item=>item.id===id));
   this.cartitem.splice(index,1);
  
   this.cartitemcount.next(this.cartitem.length);
  }

}
