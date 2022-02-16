import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private eventemit:EmitterService) { }

  

  ngOnInit(): void {
  }

  change(){
    this.eventemit.onFirstCall();
  }

}
