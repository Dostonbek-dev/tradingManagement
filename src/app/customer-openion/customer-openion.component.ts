import { Component, OnInit } from '@angular/core';
import {ProductService} from "../news/product.service";

@Component({
  selector: 'app-customer-openion',
  templateUrl: './customer-openion.component.html',
  styleUrls: ['./customer-openion.component.css']
})
export class CustomerOpenionComponent implements OnInit {

  //@ts-ignore
  products: Product[];

  responsiveOptions: any;
  constructor(private productService: ProductService) {
     this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  ngOnInit(): void {
       this.productService.getProductsSmall().then(products => {
      this.products = products;
    });
  }
  }

