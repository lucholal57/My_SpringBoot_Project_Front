import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserComponent } from './components/user/user.component';



const routes: Routes = [
  {path: 'product', component:ProductComponent},
  {path:'',component:LoginComponent},
  {path:'shop', component:ShopComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
