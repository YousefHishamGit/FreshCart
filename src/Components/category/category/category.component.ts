import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { ICategory } from '../../../core/interfaces/ICategory';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  implements OnInit{
  private readonly categoryService=inject(CategoryService)
  catData!:ICategory
  loading!:boolean

  ngOnInit(): void {
    this.loading=false;
    this.getCategoryData();
  }



  getCategoryData():void{
    this.categoryService.getAllCategory().subscribe({
      next:(res)=>{
        this.catData=res; 
        this.loading=true
      }
    })
  }

}
