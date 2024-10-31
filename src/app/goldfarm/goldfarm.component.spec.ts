import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldfarmComponent } from './goldfarm.component';

describe('GoldfarmComponent', () => {
  let component: GoldfarmComponent;
  let fixture: ComponentFixture<GoldfarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldfarmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
