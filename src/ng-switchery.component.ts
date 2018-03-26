import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "ng-switchery",
  template: `
    <div class="checkbox {{customClasses}}" [ngClass]="{disabled: disabled, 'checkbox-double':(offLabel && offLabel.length>0), 'checkbox-right': sticked}">
      <label>
        {{offLabel}}
        <input type="checkbox" class="switchery" [disabled]="disabled" [ngModel]="checked" (ngModelChange)="change($event)">
        <span class="switchery {{color}} {{size}}">
          <small></small>
        </span>
        {{onLabel}}
      </label>
    </div>
  `,
  styleUrls: ["./ng-switchery.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class NgSwitcheryComponent implements OnInit {
  @Input() checked: boolean;
  @Input() disabled?: boolean;
  @Input() onLabel?: string;
  @Input() offLabel?: string;
  @Input() color?: string;
  @Input() size?: string;
  @Input() sticked?: boolean;
  @Input() customClasses?: string;

  @Output() enableChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  change(event) {
    this.checked = event;
    this.enableChange.emit(event);
  }
}
