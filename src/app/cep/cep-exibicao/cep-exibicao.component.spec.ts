import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepExibicaoComponent } from './cep-exibicao.component';

describe('CepExibicaoComponent', () => {
  let component: CepExibicaoComponent;
  let fixture: ComponentFixture<CepExibicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepExibicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
