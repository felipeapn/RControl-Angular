import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = `${environment.API}product`;

  procs = [
    {id: 1, price: 50.00, iva: 5.00, type: 'type Priscila', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 2, price: 50.00, iva: 5.00, type: 'type 2 A2', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 2', createdon: '2019/01/15', status: 'on process', lastchange: '2019/2/15'},
    {id: 3, price: 50.00, iva: 5.00, type: 'Type Olivia', subtype:'SubTitulo Olivia', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 3', createdon: '2019/01/15', status: 'form sent', lastchange: '2019/2/15'},
    {id: 4, price: 50.00, iva: 5.00, type: 'type 2 A', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 4', createdon: '2019/01/15', status: 'created', lastchange: '2019/2/15'},
    {id: 5, price: 50.00, iva: 5.00, type: 'type 2 B', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 5', createdon: '2019/01/15', status: 'peding', lastchange: '2019/2/15'},
    {id: 6, price: 50.00, iva: 5.00, type: 'type 1 A', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 6', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 7, price: 50.00, iva: 5.00, type: 'type 1 A', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 8, price: 50.00, iva: 5.00, type: 'type 1 A', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 9, price: 50.00, iva: 5.00, type: 'type 1 A', subtype:'SubTitulo', description: 'Descricao do produto : process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 10, price: 50.00, iva: 5.00, type: 'type 1 A10', subtype:'SubTitulo',description: 'Descricao do produto : process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 11, price: 50.00, iva: 5.00, type: 'Type Alice', subtype:'SubTitulo Alice',description: 'Descricao do produto : process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'}
  ]; 


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.procs;
  }

  getById(productId: number) {
    return this.procs[productId];
  }

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
