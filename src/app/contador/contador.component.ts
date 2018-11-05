import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  valor$: Observable<number>;
  counterSubscription: Subscription = null;
  constructor(public counterService: CounterService) { 
    this.valor$=counterService.valorDoContador;
    // this.counterSubscription=counterService.valorDoContador.subscribe((value) => {
    //   this.valorAtual=value;
    // });
  }

  onUnsubscribleClick(){
    this.counterSubscription.unsubscribe()
  }

  ngOnInit() {
  }

  aumentar(){
    this.counterService.aumentar();
  }

  diminuir(){
    this.counterService.diminuir();
  }

}
