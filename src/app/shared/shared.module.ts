import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';




@NgModule({
  declarations: [WelcomeComponent, QuestionsComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
