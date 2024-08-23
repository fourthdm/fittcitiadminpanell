import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsssComponent } from './productsss.component';

describe('ProductsssComponent', () => {
  let component: ProductsssComponent;
  let fixture: ComponentFixture<ProductsssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsssComponent]
    });
    fixture = TestBed.createComponent(ProductsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
