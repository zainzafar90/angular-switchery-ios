import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgSwitcheryComponent } from "./ng-switchery-ios.component";

@NgModule({
  declarations: [NgSwitcheryComponent],
  imports: [FormsModule, CommonModule],
  exports: [NgSwitcheryComponent],
})
export class NgSwitcheryModule {}
