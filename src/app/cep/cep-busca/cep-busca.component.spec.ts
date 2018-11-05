import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepBuscaComponent } from './cep-busca.component';

describe('CepBuscaComponent', () => {
  let component: CepBuscaComponent;
  let fixture: ComponentFixture<CepBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
