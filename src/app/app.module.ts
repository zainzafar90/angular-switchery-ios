import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgSwitcheryModule } from 'angular-switchery-ios';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgSwitcheryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
