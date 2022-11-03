import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityChoiceComponent } from './city-choice.component';

describe('CityChoiceComponent', () => {
  let component: CityChoiceComponent;
  let fixture: ComponentFixture<CityChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
