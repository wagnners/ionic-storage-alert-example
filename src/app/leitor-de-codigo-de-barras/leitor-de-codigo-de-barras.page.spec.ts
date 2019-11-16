import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorDeCodigoDeBarrasPage } from './leitor-de-codigo-de-barras.page';

describe('LeitorDeCodigoDeBarrasPage', () => {
  let component: LeitorDeCodigoDeBarrasPage;
  let fixture: ComponentFixture<LeitorDeCodigoDeBarrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorDeCodigoDeBarrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorDeCodigoDeBarrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
