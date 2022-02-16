import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';

const materialComponent=[ 
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule
]

@NgModule({
 
  imports: [
  materialComponent
  ],
  exports:[
   materialComponent
  ]
})
export class MaterialModule { }
