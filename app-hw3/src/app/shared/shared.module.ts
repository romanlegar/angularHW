import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from './pipes.pipe';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipesPipe, ComponentsComponent]
})
export class SharedModule { }
