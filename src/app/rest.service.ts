import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private _http: HttpClient, private _state: StateService) { }

  url3 = "http://localhost:5000";
  // url3="http://adminpanel.fourthdm.com/node";

  // url3 = "https://adminpanel.fittciti.in/api";
  // url3 = "https://adminpanel.fittciti.in/node";

  //Apis for Admin
  Login(data: any) {
    return this._http.post(this.url3 + '/Adminlogin', data);
  }

  Alladmins() {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.url3 + '/Alladmins', { headers });
  }

  AddNewAdmin(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/AddAdminUser', data, { headers });
  }

  UpdateAdmin(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/UpdateAdmin/' + data.id, data, { headers });
  }

  DeleteAdmin(id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteAdmin/' + id, { headers });
  }

  //Apis admin ends

  //Apis for Category
  ADDCategoryToken(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/AddCategorybyAdmin', data, { headers });
  }

  Category() {
    return this._http.get(this.url3 + '/Allcategory');
  }

  EditCategory(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/UpdateCategorytoken/' + data.Category_id, data, { headers });
  }

  Deletecategory(Category_id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteCategoryToken/' + Category_id, { headers });
  }

  //ENd Category API's..

  // API's for Brand

  Brand() {
    return this._http.get(this.url3 + '/Allbrand');
  }

  AllBrand() {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.url3 + '/AllBrandToken', { headers });
  }

  AddBrand(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/ADDBrand', data, { headers });
  }

  Editbrand(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/UpdateBrandToken/' + data.Brand_id, data, { headers });
  }

  Deletebrand(Brand_id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteBrandtoken/' + Brand_id, { headers });
  }
  //End Brands APi's  

  // API's for Product
  product() {
    return this._http.get(this.url3 + '/Product');
  }

  Productbyid(id: any) {
    return this._http.get(this.url3 + '/product/' + id);
  }

  Allproducts() {
    return this._http.get(this.url3 + '/Allproducts');//ALL products with images
  }

  viewproductsss(product_id: string) {
    return this._http.get(this.url3 + '/api/products/similar/' + product_id);
  }

  AddProducts(formData: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/upload_Imagesss/Product', formData, { headers });
  }

  EditProducts(id: number, formData: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/UpdateProducts/' + id, formData, { headers });
  }

  DeleteProduct(id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteProduct/' + id, { headers });
  }
  //End Product API's

  getenquiry() {
    return this._http.get(this.url3 + '/Allcontact');
  }

  deleteinquiry(Id: any) {
    return this._http.delete(this.url3 + '/Deleteenquiry/' + Id);
  }

  getCart() {
    return this._http.get(this.url3 + '/CartsforAdmin');
  }

  getwishlist() {
    return this._http.get(this.url3 + '/Allwishlist');
  }

  getAllusers() {
    return this._http.get(this.url3 + '/ALLuser');
  }

  deleteUser(User_id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteUser/' + User_id, { headers });
  }

  getorders() {
    return this._http.get(this.url3 + '/AllordersforAdmin');
  }

  wishlistbyuser_id(data: any) {
    return this._http.post(this.url3 + '/Wishlistbyuserid', data);
  }
  //API's for Coupans
  generatecoupons(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/ADDCoupontoken', data, { headers });
  }

  AllCoupons() {
    return this._http.get(this.url3 + '/Allcoupans');
  }

  getcouponbybrand_id(Brand_id: number) {
    return this._http.get(this.url3 + '/validate-coupon/' + Brand_id);
  }

  UpdateCoupons(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/Updatecoupontoken/' + data.id, data, { headers });
  }

  deletecoupon(id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteCouponsToken/' + id, { headers });
  }

  //End a Coupans API

  //Add the delivery date and status

  deliverydate(data: any) {
    return this._http.put(this.url3 + '/AddDeliverydateandstatus/' + data.id, data);
  }

}