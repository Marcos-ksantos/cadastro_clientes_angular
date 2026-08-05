import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCadastro } from './inicio-cadastro';

describe('InicioCadastro', () => {
  let component: InicioCadastro;
  let fixture: ComponentFixture<InicioCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
