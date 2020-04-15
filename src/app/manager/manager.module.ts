import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { PanelModule } from 'primeng/panel';
import { ManagerComponent } from './manager.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { FieldMessageModule } from './../shared/field-message/field-message.module';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    declarations: [ManagerComponent, ProductFormComponent, ProductMasterComponent],
    imports: [
      CommonModule,
      AppRoutingModule,
      FieldMessageModule,
      PanelModule,
      ReactiveFormsModule,
      SelectButtonModule,
      TableModule,
      ButtonModule,
      InputTextModule,
      InputTextareaModule
    ],
    exports: [ManagerComponent, ProductFormComponent, ProductMasterComponent]
  })
  export class ManagerModule { }