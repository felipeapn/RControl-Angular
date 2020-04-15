import { Product } from '../domain/product';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-selected',
  templateUrl: './product-selected.component.html',
  styleUrls: ['./product-selected.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSelectedComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
    
  }

}
