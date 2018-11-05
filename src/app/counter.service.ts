import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _valorDoContador = new BehaviorSubject(0);
  public valorDoContador = this._valorDoContador.asObservable();
  constructor() { }

  public aumentar(){
    this._valorDoContador.next(this._valorDoContador.value + 1)
  }

  public diminuir(){
    this._valorDoContador.next(this._valorDoContador.value - 1);
  }
}
