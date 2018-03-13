import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgSwitcheryComponent } from "./ng-switchery.component";

export * from "./ng-switchery.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgSwitcheryComponent],
  exports: [NgSwitcheryComponent]
})
export class NgSwitcheryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgSwitcheryModule,
      providers: []
    };
  }
}
