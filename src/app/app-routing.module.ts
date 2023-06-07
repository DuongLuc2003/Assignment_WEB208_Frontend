import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './pages/singin/singin.component';
import { SingupComponent } from './pages/singup/singup.component';


import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ProductComponent } from './compronents/product/product.component';
import { ProductDetailComponent } from './compronents/product-detail/product-detail.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import { ContainerComponent } from './pages/home-page/container/container.component';
import { FooterComponent } from './pages/home-page/footer/footer.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'**',component:NotfoundPageComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'singup', component: SingupComponent},
  {path:'products',component:ProductComponent},
  {path:'product/:id',component:DetailProductPageComponent},
  {path:'**',component:NotfoundPageComponent}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
