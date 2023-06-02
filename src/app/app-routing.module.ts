import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ProductComponent } from './compronents/product/product.component';
import { ProductDetailComponent } from './compronents/product-detail/product-detail.component';
import { ProductItemComponent } from './compronents/product-item/product-item.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
