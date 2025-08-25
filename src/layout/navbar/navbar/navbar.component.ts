import { loginBoolean } from './../../../core/Enviroments/constents';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  private readonly router = inject(Router);
  private readonly wishlistService = inject (WishlistService)
  private readonly pLATFORM_ID = inject(PLATFORM_ID)
  private readonly cartService=inject(CartService)
  wishCount!:number;
  countCart!:number;
  ngOnInit(): void {
    //Cart Counter
    this.cartService.getCart().subscribe({
      next:(res)=>{
        this.cartService.cartNumber.next(res.numOfCartItems)
      }
    })
    this.cartService.cartNumber.subscribe({
      next:(num)=>{
        this.countCart=num;
      }
    });
    //===========================================
    // Check if the user is logged in by checking the token in localStorage
    console.log(this.countCart);
    if(isPlatformBrowser(this.pLATFORM_ID)){
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
      loginBoolean.isLogin = true; // Update the login state
    } else {
      this.isLogin = false;
      loginBoolean.isLogin = false; // Update the login state
    }
  }
  //======================================
  //wishlist Counter
  this.wishlistService.getAllWishList().subscribe({
    next:(res)=>{
      this.wishlistService.wishCount.next(res.count);
    }
  })
  this.wishlistService.wishCount.subscribe({
    next:(num)=>{
      this.wishCount=num;
    }
  })

  }

 

  logout(): void {
    localStorage.removeItem('token');
    loginBoolean.isLogin = false;
    this.isLogin = false;
    this.router.navigate(['/sign-in']);

  }
 



}
