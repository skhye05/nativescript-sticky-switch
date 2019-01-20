import { ElementRef } from '@angular/core';
import { BaseValueAccessor } from 'nativescript-angular/forms/value-accessors/base-value-accessor';
import { View } from 'tns-core-modules/ui/core/view';
export declare type SwitchView = {
    checked: boolean;
} & View;
export declare class SwitchValueAccessor extends BaseValueAccessor<SwitchView> {
    constructor(elementRef: ElementRef);
    selectedChangeListener(event: any): void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnTouched(fn: () => void): void;
}
