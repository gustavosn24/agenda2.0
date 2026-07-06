import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorContatos } from './contador-contatos';

describe('ContadorContatos', () => {
  let component: ContadorContatos;
  let fixture: ComponentFixture<ContadorContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
