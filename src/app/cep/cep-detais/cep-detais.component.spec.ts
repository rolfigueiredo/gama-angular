import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepDetaisComponent } from './cep-detais.component';

describe('CepDetaisComponent', () => {
  let component: CepDetaisComponent;
  let fixture: ComponentFixture<CepDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
