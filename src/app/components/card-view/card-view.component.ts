import { Product } from './../../domain/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  private procs: any[];

  private products: Product[];
  private fail: boolean = false;

  constructor(private productService: ProductService) { 
    this.procs = productService.getProducts();
  }

  ngOnInit() {
    this.productService.list()
      .pipe(
        take(1)
      )
      .subscribe(productData => this.products = productData, error => this.fail = true);
  }

}
