import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepDetaisComponent } from './cep-detais/cep-detais.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes=[
  {path: "", component: CepBuscaComponent},
  {path: ":cep", component: CepDetaisComponent}
];

@NgModule({
  declarations: [
    CepDetaisComponent,
    CepExibicaoComponent,
    CepBuscaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ]
  
})
export class CepModule { }
