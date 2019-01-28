import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  truthyValue = true;
  falsyValue = false;

  reactiveForm: FormGroup;

  code0 = `
  $ <code>npm</code> install angular-switchery-ios --save`;

  code1 = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppComponent } from './app.component';

  // Import your library
  import { NgSwitcheryModule } from 'angular-switchery-ios';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,

      // Specify your library as an import
      NgSwitcheryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;

  code2a = `
  &lt;!-- Switchery with Template Driven Form --&gt;
  &lt;form #form=&quot;ngForm&quot;&gt
    &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; name=&quot;switchery-check&quot; &gt;&lt;/ng-switchery&gt
  &lt;/form&gt
  `;

  code2b = `
  &lt;!-- Switchery with Reactive Form --&gt;
  &lt;form [formGroup]=&quot;reactiveForm&quot;&gt
    &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; formControlName=&quot;value&quot; &gt;&lt;/ng-switchery&gt
  &lt;/form&gt
  `;

  code3 = `
  &lt;!-- Checked Switch --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Checked switch&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- Unchecked Switch --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;falsyValue&quot; onLabel=&quot;Unchecked switch&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- Checked Disabled --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; disabled onLabel=&quot;Checked Disabled&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- Unchecked Disabled --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;falsyValue&quot; disabled onLabel=&quot;Unchecked Disabled&quot;&gt;&lt;/ng-switchery&gt;`;

  code4 = `
  &lt;!-- No class specified --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Checked in Primary&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- color = switchery-info --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Checked in Info&quot; color=&quot;switchery-info&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- color = switchery-success --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Checked in Success&quot; color=&quot;switchery-success&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- color = switchery-warning --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Checked in Warning&quot; color=&quot;switchery-warning&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- color = switchery-danger --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Checked in Danger&quot; color=&quot;switchery-danger&quot;&gt;&lt;/ng-switchery&gt;`;

  code5 = `
  &lt;!-- size = switchery-lg --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Large in size&quot; size=&quot;switchery-lg&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- No size specified --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Default in size&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- size = switchery-sm --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Small in size&quot; size=&quot;switchery-sm&quot;&gt;&lt;/ng-switchery&gt;

  &lt;!-- size = switchery-xs --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Mini in size&quot; size=&quot;switchery-xs&quot;&gt;&lt;/ng-switchery&gt;`;

  code6 = `
  &lt;!-- Specify onLabel  --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Single Label Switch&quot; &gt;&lt;/ng-switchery&gt;

  &lt;!-- Specify both onLabel &amp; offLabel --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Option 1&quot; offLabel=&quot;Option 2&quot;&gt;&lt;/ng-switchery&gt;`;

  code7 = `
  &lt;!-- Set sticked = true --&gt;
  &lt;ng-switchery [(ngModel)]=&quot;truthyValue&quot; onLabel=&quot;Option 1&quot; sticked=&quot;true&quot;&gt;&lt;/ng-switchery&gt;`;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      value: true
    });
  }
}
