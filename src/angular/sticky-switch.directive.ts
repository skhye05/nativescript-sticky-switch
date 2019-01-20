import {
    Directive,
    ElementRef,
    HostListener,
    Inject,
    forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor } from 'nativescript-angular/forms/value-accessors/base-value-accessor';
import { View } from 'tns-core-modules/ui/core/view';

const SWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchValueAccessor),
    multi: true
};

export type SwitchView = { checked: boolean } & View;

/**
 * The accessor for setting checked property and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TNSStickySwitch [(ngModel)]="model.test">
 *  ```
 */
@Directive({
    selector: 'TNSStickySwitch[ngModel], TNSStickySwitch[formControlName], TNSStickySwitch[formControl], TNSStickySwitch[ngModel], TNSStickySwitch[formControlName], TNSStickySwitch[formControl], sticky-switch[ngModel], sticky-switch[formControlName], sticky-switch[formControl], TNSStickySwitch[ngModel]',
    providers: [SWITCH_VALUE_ACCESSOR]
})
export class SwitchValueAccessor extends BaseValueAccessor<SwitchView> {
    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super(elementRef.nativeElement);
    }

    @HostListener('selectedChange', ['$event'])
    public selectedChangeListener(event: any) {
        this.onChange(event.value);
    }

    public onTouched = () => { };

    public writeValue(value: any): void {
        this.view.checked = value;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
