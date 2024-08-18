import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { NotfoundComponent } from './layout/addions/notfound/notfound.component';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'products',component:ProductsComponent},
    {path:'register',component:RegisterComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'brands',component:BrandsComponent},
    {path:'home',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'**',component:NotfoundComponent},
];
