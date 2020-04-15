import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelectedComponent } from './product-selected.component';

@NgModule({
    declarations: [ProductSelectedComponent],
    imports: [
      CommonModule,

    ],
    exports: [ProductSelectedComponent]
  })
  export class ProductSelectedModule { }