import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FevCountriesComponent } from './fev-countries.component';

describe('FevCountriesComponent', () => {
  let component: FevCountriesComponent;
  let fixture: ComponentFixture<FevCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FevCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FevCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
