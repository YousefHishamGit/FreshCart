import { IProduct, Product } from './../../../core/interfaces/Iproduct';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { CurrencyPipe } from '@angular/common';
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';
import { get } from 'http';
import { IWishlist } from '../../../core/interfaces/IWishlist';
import { NgClass } from '@angular/common';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';

import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  imports: [CurrencyPipe,CommonModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  private readonly produstService=inject(ProductService)
  private readonly wishlistService=inject(WishlistService)
  private readonly cartService = inject(CartService)
  
  private readonly ToastrService = inject(ToastrService)
  searchInput:string="";

  ProductData!:IProduct;
  wishData!:IWishlist;
  loading!: boolean;
  disableBTN!:boolean;
  wishIds = new Set<string>();
  ngOnInit(): void {
    
    this.loading = false; 

    this.getProductData();
    this.getAllWish();
    

  }
  
  getProductData(){
   
    this.produstService.getAllProducts().subscribe({
      next:(data:IProduct)=>{
        this.ProductData=data;
        this.loading = true; 
        console.log('Product data fetched successfully:', this.ProductData);
      },
      error:(err:any)=>{
        console.error('Error fetching product data:', err);
      }
    })
      
  }


  getAllWish():void{
    this.wishlistService.getAllWishList().subscribe({
      next:(res)=>{
        this.wishData=res
        
        console.log(this.wishData);
      },
      error:(err:any)=>{
        console.error('Error fetching wishList data:', err);
      }


    })
  }
  addWishProd(id:string):void{
    if(!this.isExist(id)){
    this.wishlistService.addAllProductWish(id).subscribe({
      next:(res)=>{
        console.log(res); 
        this.ToastrService.success(res.message,'FreshCart')
        this.wishlistService.wishCount.next(res.data.length)
        
      }
    })

  }
  else{
    console.log("already exist")
  }
  }

  isExist(id:string):boolean{
    
    return this.wishData.data?.some(item => item._id === id);
  }

  addToCart(id:string):void{
    this.disableBTN=true;
    this.cartService.AddToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.ToastrService.success(res.message,'FreshCart');
        this.cartService.cartNumber.next(res.numOfCartItems);
        this.disableBTN=false;
    }})
  }

  }
  















