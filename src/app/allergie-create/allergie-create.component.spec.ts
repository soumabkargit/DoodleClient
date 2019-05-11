import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieCreateComponent } from './allergie-create.component';

describe('AllergieCreateComponent', () => {
  let component: AllergieCreateComponent;
  let fixture: ComponentFixture<AllergieCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergieCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
