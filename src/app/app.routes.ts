import { Routes } from '@angular/router';
import { BlankComponent } from '../layout/blank/blank.component';
import { AuthComponent } from '../layout/auth/auth/auth.component';
import { SignInComponent } from '../Components/LogIn/sign-in/sign-in.component';
import { RegisterComponent } from '../Components/Register/register/register.component';
import { HomeComponent } from '../Components/home/home/home.component';
import { ProductComponent } from '../Components/Product/product/product.component';
import { loggedGuard } from '../core/guard/log/logged.guard';
import { BrandComponent } from '../Components/Brand/brand/brand.component';
import { CartComponent } from '../Components/Cart/cart/cart.component';
import { notLoggedGuard } from '../core/guard/NotLogged/not-logged.guard';
import { WishlistComponent } from '../Components/wishlist/wishlist/wishlist.component';
import { CategoryComponent } from '../Components/category/category/category.component';
import { DescriptionComponent } from '../Components/description/description/description.component';
import { PaymentComponent } from '../Components/Payment/payment/payment.component';
import { UserOrdersComponent } from '../Components/userOrders/user-orders/user-orders.component';



export const routes: Routes = [

    {
        path: "",
        component:AuthComponent,
        canActivate:[notLoggedGuard],
        children: [
            {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
            {path: 'sign-in', component: SignInComponent},
            {path: 'register',component: RegisterComponent}
        ]
        
    },
    {
        path: "",
        component:BlankComponent,
        canActivate:[loggedGuard],
        children: [
            {path:'home',component:HomeComponent},
            {path:'product',component:ProductComponent},
            {path:'brand',component:BrandComponent},
            {path:'cart',component:CartComponent},
            {path:'wishlist',component:WishlistComponent},
            {path:'category',component:CategoryComponent},
            {path:'description/:id',component:DescriptionComponent},
            {path:'payment/:id',component:PaymentComponent},
            {path:'UserOrder/:id',component:UserOrdersComponent},

            
            
        ]
    }

];
