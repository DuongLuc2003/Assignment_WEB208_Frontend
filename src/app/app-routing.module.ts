import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './pages/singin/singin.component';
import { SingupComponent } from './pages/singup/singup.component';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ProductComponent } from './compronents/product/product.component';
import { ProductDetailComponent } from './compronents/product-detail/product-detail.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import { ContainerComponent } from './pages/home-page/container/container.component';
import { FooterComponent } from './pages/home-page/footer/footer.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'**',component:NotfoundPageComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'singup', component: SingupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
