import { IProduct, Product } from './../../../core/interfaces/Iproduct';
import { Component, inject, OnInit, viewChildren } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDescription } from '../../../core/interfaces/IDescription';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-description',
  imports: [CurrencyPipe,NgClass],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  private readonly productService=inject(ProductService)
  private readonly activatedRoute = inject(ActivatedRoute);
  ProductData!:IDescription
  indexImg:any;
  

  id!:any;
  ngOnInit(): void {
    
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.getSpecificProduct();
    this.indexImg=0;
    
  }


  getSpecificProduct():void{
    this.productService.getSpecificProduct(this.id).subscribe({

      next:(res)=>{
        console.log(res);
        this.ProductData=res;
        console.log(this.ProductData)
      },
      error:(err)=>{
        console.log(err);
        
      }
        
    })
  }

  caruselImg(num:number):void{
    this.indexImg=num;

  }

}
