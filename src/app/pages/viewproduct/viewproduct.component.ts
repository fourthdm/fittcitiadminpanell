import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  scrolltop = document.getElementById("scrolltop");
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  productList: any;
  mainImages: any[] = [];
  similarProducts: any[] = [];
  similarWeights: any[] = [];
  productQuantity: number = 1;

  constructor(private _rest: RestService, private _activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id) {
        this.getProductAndSimilar(id);
      }
    });
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  getProductAndSimilar(id: string) {
    this._rest.Productbyid(id).subscribe((productData: any) => {
      if (productData.success) {
        this.productList = productData.data;
        this.mainImages = productData.data[0].mainimage.split(',');
        this.mainImages.reverse();

        this.getSimilarProducts(id);
        // this.GetsimilarWeight(id);
      } else {
        console.error('Error fetching product:', productData.message);
      }
    }, (error: any) => {
      console.error('Error fetching product:', error);
    });
  }

  getSimilarProducts(product_id: string) {
    this._rest.viewproductsss(product_id).subscribe((similarData: any) => {
      this.similarProducts = similarData;
    }, (error: any) => {
      console.error('Error fetching similar products:', error);
    });
  }

  getStyle(product: any): any {
    return {
      'color': product.status == "1" ? 'green' : 'red'
    };
  }
}
