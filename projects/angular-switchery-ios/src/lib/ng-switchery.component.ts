import { HostBinding, forwardRef } from '@angular/core';
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ng-switchery',
  template: `
    <div
      class="checkbox {{ customClasses }}"
      [ngClass]="{
        disabled: disabled,
        'checkbox-double': offLabel && offLabel.length > 0,
        'checkbox-right': sticked
      }"
    >
      <label>
        {{ offLabel }}
        <input
          type="checkbox"
          class="switchery"
          [disabled]="disabled"
          [value]="value"
          (change)="onChange($event)"
          [checked]="value"
        />
        <span class="switchery {{ color }} {{ size }}"> <small></small> </span>
        {{ onLabel }}
      </label>
    </div>
  `,
  styleUrls: ['./ng-switchery.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgSwitcheryComponent),
      multi: true
    }
  ]
})
export class NgSwitcheryComponent implements ControlValueAccessor {
  @Input() value: boolean;

  @Input() onLabel?: string;
  @Input() offLabel?: string;
  @Input() color?: string;
  @Input() size?: string;
  @Input() sticked?: boolean;
  @Input() customClasses?: string;

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  // Allows Angular to update the model
  // Update the model and changes needed for the view here.
  writeValue(value: any) {
    this.value = value;
  }

  // Allows Angular to register a function to call when the model changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched() {}

  // Change event from Switchery Toggle
  onChange(event) {
    this.value = !this.value;
    // update the form
    this.propagateChange(this.value);
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // the method set in registerOnChange to emit changes back to the form
  propagateChange = (_: any) => {};
}
