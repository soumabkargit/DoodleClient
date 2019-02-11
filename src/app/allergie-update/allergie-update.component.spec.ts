import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieUpdateComponent } from './allergie-update.component';

describe('AllergieUpdateComponent', () => {
  let component: AllergieUpdateComponent;
  let fixture: ComponentFixture<AllergieUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergieUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
