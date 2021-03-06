import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
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

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });
  }

}
