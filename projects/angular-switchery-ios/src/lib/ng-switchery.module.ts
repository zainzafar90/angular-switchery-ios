import { NgModule } from '@angular/core';
import { NgSwitcheryComponent } from './ng-switchery.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgSwitcheryComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgSwitcheryComponent]
})
export class NgSwitcheryModule {}
