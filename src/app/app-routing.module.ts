import { DefaultLayoutComponent } from './layouts/DefaultLayout/default-layout/default-layout.component';
import { NgModule } from '@angular/core';

import { SinginComponent } from './pages/singin/singin.component';
import { SingupComponent } from './pages/singup/singup.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './compronents/product/product.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'product/:id', component: DetailProductPageComponent },
    ],
  },

  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'products', component: ProductComponent },
  { path: 'singin', component: SinginComponent },
  { path: 'singup', component: SingupComponent },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
