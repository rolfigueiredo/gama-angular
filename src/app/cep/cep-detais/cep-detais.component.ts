import { Component, OnInit } from '@angular/core';
import { BuscadorCepService } from '../buscador-cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep-detais',
  templateUrl: './cep-detais.component.html',
  styleUrls: ['./cep-detais.component.css']
})
export class CepDetaisComponent implements OnInit {
  resultado={};
  constructor(private buscadorCEP:BuscadorCepService,
    private activedRoute: ActivatedRoute) { 
      activedRoute.params.subscribe( params => {
        buscadorCEP.getCEP(params.cep).subscribe((valor) => {
          console.log(valor);
          this.resultado=valor;
        });
      });
  }

  ngOnInit() {
  }

}
