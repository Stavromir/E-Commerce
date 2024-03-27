import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCouponeComponent } from './post-coupone.component';

describe('PostCouponeComponent', () => {
  let component: PostCouponeComponent;
  let fixture: ComponentFixture<PostCouponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCouponeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCouponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
