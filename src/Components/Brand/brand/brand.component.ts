import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../../core/services/Brands/brands.service';
import { IBrands } from '../../../core/interfaces/IBrand';

@Component({
  selector: 'app-brand',
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {
  private readonly brandsService= inject(BrandsService);
  brandData!:IBrands
  loading!:boolean 

  ngOnInit(): void {
    this.loading=false;
    this.getAllBrands();
  }


  getAllBrands():void{
    this.brandsService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.brandData=res;
        this.loading=true;
      }
      ,error:(err)=>{
        console.log(err);
      }
    })
  }

}
