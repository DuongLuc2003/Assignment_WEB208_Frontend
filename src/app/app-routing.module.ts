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
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import { ContainerComponent } from './pages/home-page/container/container.component';
import { FooterComponent } from './pages/home-page/footer/footer.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ManagementProductComponent } from './compronents/management-product/management-product.component';
import { ProductAddComponent } from './compronents/product-add/product-add.component';
import { ProductEditComponent } from './compronents/product-edit/product-edit.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:slug', component: DetailProductPageComponent },
  { path: '**', component: NotfoundPageComponent },
  { path: 'singin', component: SinginComponent },
  { path: 'singup', component: SingupComponent },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ManagementProductComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent }
    ],
  },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
