import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonboxComponent } from './pokemonbox.component';

describe('PokemonboxComponent', () => {
  let component: PokemonboxComponent;
  let fixture: ComponentFixture<PokemonboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
