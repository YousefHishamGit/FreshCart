import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { ICart } from '../../../core/interfaces/ICart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  private readonly cartService=inject(CartService);
  cartData!:ICart;


  ngOnInit(): void {
    this.getCartData();
    
  }

  getCartData():void{
    this.cartService.getCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartData=res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  removeItem(id:string):void{
    this.cartService.removeItem(id).subscribe({
      next:(res)=>{
        this.getCartData();
      }
    })
  }

  updateQuantity(id:string,newCount:number):void{
     console.log("tesssstt1111")
    this.cartService.updateCount(id,newCount).subscribe({
      next:(res)=>{
        this.getCartData();
        console.log("tesssstt")
      }
    })
  }

  



  

}
