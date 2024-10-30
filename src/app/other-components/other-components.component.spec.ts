import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponentsComponent } from './other-components.component';

describe('OtherComponentsComponent', () => {
  let component: OtherComponentsComponent;
  let fixture: ComponentFixture<OtherComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
