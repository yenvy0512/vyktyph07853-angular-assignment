import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProductAddComponent } from './product-add/product-add.component';
import { ManageComponent } from './manage/manage.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
const routes: Routes = [
   {path: 'home',component: HomeComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 {path: 'manage',component: ManageComponent},
  {path: 'product',component: ManageComponent},
  {path: 'product-add',component: ProductAddComponent},
      {path: 'product/edit/:productID', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
