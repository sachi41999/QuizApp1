import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';







@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,MaterialModule,
  ]
  ,exports:[HeaderComponent,SidenavComponent]
})
export class CoreModule { }
