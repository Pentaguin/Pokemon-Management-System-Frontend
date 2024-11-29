import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonmartComponent } from './pokemonmart.component';

describe('PokemonmartComponent', () => {
  let component: PokemonmartComponent;
  let fixture: ComponentFixture<PokemonmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
