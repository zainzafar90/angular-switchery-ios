import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgSwitcheryModule } from "angular-switchery-ios";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, NgSwitcheryModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
