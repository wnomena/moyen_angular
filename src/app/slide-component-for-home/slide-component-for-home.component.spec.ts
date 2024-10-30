import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideComponentForHomeComponent } from './slide-component-for-home.component';

describe('SlideComponentForHomeComponent', () => {
  let component: SlideComponentForHomeComponent;
  let fixture: ComponentFixture<SlideComponentForHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideComponentForHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideComponentForHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
