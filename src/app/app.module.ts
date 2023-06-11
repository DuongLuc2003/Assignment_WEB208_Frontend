import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { SinginComponent } from './pages/singin/singin.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ProductComponent } from './compronents/product/product.component';
import { ProductDetailComponent } from './compronents/product-detail/product-detail.component';
import { ProductItemComponent } from './compronents/product-item/product-item.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import { ContainerComponent } from './pages/home-page/container/container.component';
import { FooterComponent } from './pages/home-page/footer/footer.component';
import { CategoriesService } from './services/categories.service';
import { ProductAddComponent } from './compronents/product-add/product-add.component';
import { ManagementProductComponent } from './compronents/management-product/management-product.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './layouts/DefaultLayout/default-layout/default-layout.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product/product.effect';
import { cartReducer } from './store/cart/cart.reducer';
import { ProductEditComponent } from './compronents/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NotfoundPageComponent,
    DetailProductPageComponent,
    SinginComponent,
    SingupComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductItemComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    AdminLayoutComponent,
    ManagementProductComponent,
    ProductAddComponent,
    DefaultLayoutComponent,
    CartPageComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ product: productReducer, cart: cartReducer }),
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
