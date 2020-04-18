import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

import { Product } from '../../Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  page= 1;
pageSize=6;
  selected: Product;
  products: Product[];

  constructor(

        private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
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
  removeItem(id){
    this.productService.removeProduct(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
  }


  showDetail(product){
    console.log(product);
    this.selected = product;
  }
}
