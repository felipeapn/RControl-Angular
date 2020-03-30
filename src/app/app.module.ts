import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TreeModule } from 'primeng/tree';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserFormComponent } from './components/user-main/user-form/user-form.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProcessSelectComponent } from './components/user-main/process-select/process-select.component';
import { UploadComponent } from './components/upload/upload.component';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { ManagerComponent } from './components/manager/manager.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { StepsComponent } from './components/steps/steps.component';
import { ProductSelectedComponent } from './components/product-selected/product-selected.component';
import { ProductMasterComponent } from './components/manager/product-master/product-master.component';
import { ProductFormComponent } from './components/manager/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserFormComponent,
    UserMainComponent,
    ProcessSelectComponent,
    UploadComponent,
    WorkMainComponent,
    ManagerComponent,
    CardViewComponent,
    StepsComponent,
    ProductSelectedComponent,
    ProductMasterComponent,
    ProductFormComponent
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
    InputTextModule,
    ButtonModule,
    PanelModule,
    TreeModule,
    FileUploadModule,
    ToastModule,
    AccordionModule,
    TableModule,
    InputTextareaModule,
    CardModule,
    StepsModule,
    ScrollPanelModule,
    SelectButtonModule,
    InputMaskModule,
    MessagesModule,
    MessageModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
