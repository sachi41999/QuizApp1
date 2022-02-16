import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  invokeFirstComponentFunction=new EventEmitter();
  subsvr: Subscription | undefined ;
  constructor() { 
  }

  onFirstCall(){
    this.invokeFirstComponentFunction.emit();
  }

}
