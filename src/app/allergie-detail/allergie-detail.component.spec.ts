import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieDetailComponent } from './allergie-detail.component';

describe('AllergieDetailComponent', () => {
  let component: AllergieDetailComponent;
  let fixture: ComponentFixture<AllergieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
