import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = `${environment.API}products`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Product[]>(this.API).pipe(take(1));
  }

private create(product: Product) {
    return this.http.post(this.API, product).pipe(take(1));
  }

  loadByID(id: number) {
    return this.http.get<Product>(`${this.API}/${id}`).pipe(take(1));
  }

  private update(product: Product) {
    return this.http.put<Product>(`${this.API}/${product.id}`, product).pipe(take(1))
  }

  save(product: Product) {
    if (product.id) {
      return this.update(product);
    }
    return this.create(product);
  }

  delete(id: number) {
    return this.http.delete<Product>(`${this.API}/${id}`).pipe(take(1));
  }

}
