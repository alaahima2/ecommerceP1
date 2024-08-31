import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { NotfoundComponent } from './layout/addions/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { ForgetpasswordComponent } from './layout/addions/forgetpassword/forgetpassword.component';
import { ProductDetailsComponent } from './layout/addions/product-details/product-details.component';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent ,canActivate :[authGuard]},
    {path:'cart',component:CartComponent,canActivate :[authGuard]},
    {path:'login',component:LoginComponent},
    {path:'products',component:ProductsComponent,canActivate :[authGuard]},
    {path:'register',component:RegisterComponent},
    {path:'categories',component:CategoriesComponent,canActivate :[authGuard]},
    {path:'brands',component:BrandsComponent,canActivate :[authGuard]},
    {path:'forgetpassword',component:ForgetpasswordComponent},
    {path:'productdetails/:id',component:ProductDetailsComponent,canActivate :[authGuard]},
    // {path:'home',component:HomeComponent}
    {path:'**',component:NotfoundComponent},
];
