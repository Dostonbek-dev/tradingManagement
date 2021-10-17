import {Component, OnInit} from '@angular/core';
import {Product} from "../news/product";
import {ProductService} from "../news/product.service";

@Component({
  selector: 'app-customer-paymnet',
  templateUrl: './customer-paymnet.component.html',
  styleUrls: ['./customer-paymnet.component.css']
})
export class CustomerPaymnetComponent implements OnInit {
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