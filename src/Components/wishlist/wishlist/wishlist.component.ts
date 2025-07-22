import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';
import { IWishlist } from '../../../core/interfaces/IWishlist';

import { CurrencyPipe, DatePipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  private readonly wishlistService = inject(WishlistService)
  private readonly pLATFORM_ID = inject(PLATFORM_ID)
  wishData!:IWishlist
  loading!:boolean

  ngOnInit(): void {
    this.loading=false;
    this.getWishData();
    
  }

  getWishData():void{
    this.wishlistService.getAllWishList().subscribe({
      next:(res)=> {
        this.wishData=res;
        this.loading=true;
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  removeFromWis(Id:string):void{
    console.log("test")
    this.wishlistService.removeProductWish(Id).subscribe({
      next:(res)=>{
        console.log(res);
        this.getWishData();
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }



}
