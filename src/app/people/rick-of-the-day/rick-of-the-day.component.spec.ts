import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickOfTheDayComponent } from './rick-of-the-day.component';

describe('RickOfTheDayComponent', () => {
  let component: RickOfTheDayComponent;
  let fixture: ComponentFixture<RickOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
