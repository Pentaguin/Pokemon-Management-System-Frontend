import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoncenterComponent } from './pokemoncenter.component';

describe('PokemoncenterComponent', () => {
  let component: PokemoncenterComponent;
  let fixture: ComponentFixture<PokemoncenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemoncenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemoncenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
