import { StickySwitchBase } from './sticky-switch.common';
import { EventData } from 'tns-core-modules/ui/core/view';

export interface SelectedChangedEventData extends EventData {
  direction: any;
  text: string;
}

export declare class TNSStickySwitch extends StickySwitchBase {
    constructor();
}

