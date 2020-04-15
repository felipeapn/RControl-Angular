import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { CardViewComponent } from './card-view/card-view.component';
import { StepsComponent } from './steps/steps.component';
import { ProductSelectedModule } from '../product-selected/product-selected.module';

import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [CardViewComponent, StepsComponent],
  imports: [
    CommonModule,
    CardModule,
    ScrollPanelModule,
    AppRoutingModule,
    ButtonModule,
    StepsModule,
    PanelModule,
    ProductSelectedModule
  ],
  exports: [CardViewComponent, StepsComponent]
})
export class ProductClientModule { }
