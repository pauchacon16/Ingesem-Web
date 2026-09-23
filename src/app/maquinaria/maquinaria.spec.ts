import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maquinaria } from './maquinaria';

describe('Maquinaria', () => {
  let component: Maquinaria;
  let fixture: ComponentFixture<Maquinaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maquinaria],
    }).compileComponents();

    fixture = TestBed.createComponent(Maquinaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
