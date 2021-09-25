import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickgoogleComponent } from './rickgoogle.component';

describe('RickgoogleComponent', () => {
  let component: RickgoogleComponent;
  let fixture: ComponentFixture<RickgoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickgoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
