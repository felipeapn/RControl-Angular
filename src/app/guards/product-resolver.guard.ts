import { ProductService } from './../services/product.service';
import { Product } from './../domain/product';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverGuard implements Resolve<Product> {

  constructor (private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    
    if (route.params && route.params['id']) {
      return this.productService.loadByID(route.params['id']);
    }

    return of ({
      id: null,
      type: null,
      name: null,
      description: null,
      price: null,
      iva: null
    })
  }
  
}
