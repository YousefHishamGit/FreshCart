import { CartService } from './../../../core/services/cart/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../../../core/services/payment/payment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  paymentForm:FormGroup=new FormGroup({
      details: new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      city:new FormControl('',[Validators.required])
    })
    private readonly paymentService=inject(PaymentService);
    private readonly activatedRoute=inject(ActivatedRoute);
    private readonly router = inject(Router)
    private readonly cartService=inject(CartService);
    cartId!:string
    onlinePayBtn:boolean=false;

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe({
        next:(param)=>{
          this.cartId=param.get('id')!;
          console.log(this.cartId);
          console.log(this.onlinePayBtn)
        }
      })
    }


    onlinePay():void{
      console.log("online")
      this.paymentService.onlinePayment(this.cartId,this.paymentForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          this.cartService.cartNumber.next(0)
          if(res.status==='success'){
          open(res.session.url);}
          this.router.navigate([`/UserOrder`, this.cartId]); 
          
        }
      })
    }

    cashPay():void{
      console.log("cash")
      this.paymentService.cashPayment(this.cartId,this.paymentForm.value).subscribe({
        next:(res)=>{console.log(res)
          this.router.navigate([`/UserOrder`, this.cartId]); 
          this.cartService.cartNumber.next(0)
        }
      })
    }

      checkBtn(){
        this.onlinePayBtn=!this.onlinePayBtn;
      }

      payMethod(){
        if(this.onlinePayBtn){
          this.onlinePay();
        }
        else{
          this.cashPay();
        }

      }

     
}
