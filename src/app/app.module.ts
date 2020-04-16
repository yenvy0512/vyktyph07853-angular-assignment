import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './frontend/header/header.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { HomeComponent } from './frontend/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductService } from './product.service';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ManageComponent } from './backend/manage/manage.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AdminComponent } from './backend/admin/admin.component';
@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule,AngularFontAwesomeModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, HomeComponent, ProductAddComponent, ManageComponent, ProductEditComponent, ProductDetailComponent, ProductListComponent, DashboardComponent, AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
