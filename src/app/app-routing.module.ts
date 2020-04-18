import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { ProductListComponent } from './backend/product-list/product-list.component';
import {ProductAddComponent } from './backend/product-add/product-add.component';
import { ManageComponent } from './backend/manage/manage.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AdminComponent } from './backend/admin/admin.component';
const routes: Routes = [
   {path: 'home',component: HomeComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 

  {path: 'product-list',component: ProductListComponent},
  
      
         {path: 'product/:id', component: ProductDetailComponent},
           {path: 'admin',component: AdminComponent,
children:[
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent},
   {path: 'manage',component: ManageComponent},
   {path: 'product-add',component: ProductAddComponent}

]
  },   {path: 'product/edit/:productID', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
