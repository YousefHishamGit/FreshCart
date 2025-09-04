import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { PaymentService } from '../../../core/services/payment/payment.service';
import { IOrders, IordersData } from '../../../core/interfaces/IOrders';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-orders',
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent implements OnInit{
  private readonly paymentService=inject(PaymentService)
  private readonly activatedRoute=inject(ActivatedRoute)
  cartId!:string
  ordersData!:IordersData;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.cartId=param.get('id')!;
      }

    })
    this.getUserOrders();
  }

  getUserOrders(){
    this.paymentService.getUserOrder().subscribe({
      next:(res)=>{
        this.ordersData=res;
        console.log(this.ordersData);
      }
    })
  }


}
