import { ProductResolverGuard } from './guards/product-resolver.guard';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ManagerComponent } from './components/manager/manager.component';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepsComponent } from './components/steps/steps.component';
import { ProductFormComponent } from './components/manager/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'client', component: UserMainComponent },
  { path: 'work', component: WorkMainComponent },
  { path: 'masterdata', component: ManagerComponent },
  {
    path: 'masterdata/new-product',
    component: ProductFormComponent,
    resolve: {
      product: ProductResolverGuard
    }
  },
  {
    path: 'masterdata/edit-product/:id',
    component: ProductFormComponent,
    resolve: {
      product: ProductResolverGuard
    }
  },
  { path: 'cardview', component: CardViewComponent },
  { path: 'checkout/:id', component: StepsComponent }// children: [
  // {path:'', redirectTo: '/cardview', pathMatch: 'full' },
  // {path:':id', component: StepsComponent}
  //]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }