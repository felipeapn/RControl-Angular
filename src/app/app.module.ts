import { ProductClientModule } from './product-client/product-client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { TreeModule } from 'primeng/tree';
import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserFormComponent } from './components/user-main/user-form/user-form.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProcessSelectComponent } from './components/user-main/process-select/process-select.component';
import { UploadComponent } from './components/upload/upload.component';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { ManagerModule } from './manager/manager.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //UserFormComponent,
    //UserMainComponent,
    //ProcessSelectComponent,
   // UploadComponent,
   // WorkMainComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    CommonModule,
    TreeModule,
    FileUploadModule,
    AccordionModule, 
    InputMaskModule,
    ProductClientModule,
    ManagerModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
