import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { BrandComponent } from './pages/brand/brand.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './pages/admin/admin.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsssComponent } from './pages/productsss/productsss.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginComponent } from './common/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CategoryComponent,
    BrandComponent,
    AdminComponent,
    CouponsComponent,
    DashboardComponent,
    EnquiryComponent,
    HomeComponent,
    OrdersComponent,
    ProductsssComponent,
    UsersComponent,
    ViewproductComponent,
    WishlistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
