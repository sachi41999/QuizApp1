import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  opened=false;
  constructor(private eventemit:EmitterService) { }

  ngOnInit(): void {
    if(this.eventemit.subsvr==undefined){
      this.eventemit.subsvr=this.eventemit.invokeFirstComponentFunction.subscribe((name:string)=>{
        this.toogle();
      })
    }
  }
  
  toogle(){
    this.opened=!this.opened
  }

}
