
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('TNSStickySwitch', () => require('../sticky-switch').TNSStickySwitch);
import { SwitchValueAccessor } from './sticky-switch.directive';
@NgModule({
    declarations: [SwitchValueAccessor],
    providers: [],
    imports: [FormsModule],
    exports: [FormsModule, SwitchValueAccessor]
})
export class TNSStickySwitchModule { }


