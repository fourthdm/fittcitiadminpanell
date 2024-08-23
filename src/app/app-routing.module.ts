import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsssComponent } from './pages/productsss/productsss.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { BrandComponent } from './pages/brand/brand.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'product', component: ProductsssComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'user', component: UsersComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'enquiry', component: EnquiryComponent },
      { path: 'coupons', component: CouponsComponent },
      // { path: 'cart', component: carts },
      { path: 'viewproduct/:id', component: ViewproductComponent },
      { path: '**', redirectTo: 'Dashboard' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
