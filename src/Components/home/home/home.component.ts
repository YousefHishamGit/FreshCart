import { Category } from './../../../core/interfaces/Iproduct';
import { OwlOptions } from './../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { Component, inject ,OnInit} from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../../core/services/categories/category.service';
import { BrandsService } from '../../../core/services/Brands/brands.service';

import { IProduct } from '../../../core/interfaces/Iproduct';
import { ICategory } from '../../../core/interfaces/ICategory';
import { IBrands } from '../../../core/interfaces/IBrand';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselModule,CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly product=inject(ProductService)
  private readonly category=inject(CategoryService)
  private readonly brands=inject(BrandsService)
  ProductData!:IProduct;
  CategoryData!:ICategory;
  BrandsData!:IBrands;
  loading!:boolean ;

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
    brandsCur: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    nav: false
  }




  ngOnInit(): void {
    this.loading = false;

    
    this.getAllBrands();
    this.getAllProducts();
    
  }
getAllProducts() {

  this.product.getAllProducts().subscribe({
    next:(res)=>{
      
      this.ProductData = res;
      this.loading = true;
    
    },
    error:(err)=>{
      console.error('Error fetching products:', err);
    }
  }
  )
 
}
getAllCategories(): void {
  this.category.getAllCategory().subscribe({
    next:(res)=>{
      
      this.CategoryData = res;
      console.log(this.CategoryData);
      
    },
    error:(err)=>{
      console.error('Error fetching categories:', err);
    }
  }
  )
}
getAllBrands(): void {
  this.brands.getAllBrands().subscribe({
    next:(res)=>{
      
      this.BrandsData = res;
      console.log(this.BrandsData);
    },
    error:(err)=>{
      console.error('Error fetching brands:', err);
    }
  }
  )
}



}
