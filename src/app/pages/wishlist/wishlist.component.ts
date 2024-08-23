import { Component, Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  selectedFile: File | null = null; // Initialize as null
  image: string | null = null;
  pro: any
  wishlist: any[] = [];
  users: any[] = [];
  @Input() User_id: any;

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this.getwishlist();
    this.getuserid();
  }

  getwishlist() {
    this._rest.getwishlist().subscribe((data: any) => {
      console.log(data);
      this.wishlist = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getuserid() {
    this._rest.getAllusers().subscribe((data: any) => {
      console.log(data);
      this.users = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  userwishlist() {
    this._rest.wishlistbyuser_id({ User_id: this.User_id }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.wishlist = data.data;
      } else {
        this.wishlist = [];
      }
    },
      (err: any) => {
        console.log(err);

      }
    )
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]; // Update selected file
  }

  onUpload(): void {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('imageData', this.selectedFile, this.selectedFile.name);

    // this._rest.uploadImage(formData).subscribe(
    //   (response) => {
    //     console.log('Image uploaded successfully');
    //     this.image = response.image;
    //   },
    //   (error) => {
    //     console.error('Failed to upload image:', error);
    //   }
    // );
  }
}
