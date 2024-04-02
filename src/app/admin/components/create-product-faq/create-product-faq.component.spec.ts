import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductFaqComponent } from './create-product-faq.component';

describe('CreateProductFaqComponent', () => {
  let component: CreateProductFaqComponent;
  let fixture: ComponentFixture<CreateProductFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProductFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
