import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl= 'https://fakestoreapi.com/products' ;


  constructor( private http :HttpClient  ) { }


  getproduct():Observable<Products[]>{

    return this.http.get<Products[]>(this.apiUrl);
    
    }

    getproductbyidra(id:number):Observable<Products>
  {
    return this.http.get<Products>('https://fakestoreapi.com/products/'+id.toString());
  }

}
