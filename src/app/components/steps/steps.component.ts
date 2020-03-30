import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

export enum PageNames {
    ProductPage,
    IdPage,
    PaymentPage,
    ConfirmationPage
}

@Component({
  selector: 'app-steps',
  providers: [MessageService],
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number = 0;

  dialogPages: MenuItem[] = [
      {label: "My Product"},
      {label: "Identification"},
      {label: "Payment"},
      {label: "Confirmation"}
  ];

  PageNames = PageNames;
  dialogPageIndex = PageNames.ProductPage;

  productId: number;
  product: any;

  constructor(private messageService: MessageService,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    console.log(this.route.params['id']);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.productId = +params['id'];
          console.log(this.productId);
          console.log(params['id']);
          //this.recipe = this.recipeService.getRecipe(this.id);
        }
      );

      this.product = this.productService.getById(this.productId - 1);
  }
  nextStep() {
    this.dialogPageIndex = this.dialogPageIndex + 1;
    console.log(this.dialogPageIndex);
  }

  backStep() {
    this.dialogPageIndex = this.dialogPageIndex - 1;
  }
}
