import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
page= 1;
pageSize=6;
selected: Product;
  products: Product[];

  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
 

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      console.log(data)
      this.products = data;
     });
   }

  showDetail(product){
    console.log(product);
    this.selected = product;
  }
}