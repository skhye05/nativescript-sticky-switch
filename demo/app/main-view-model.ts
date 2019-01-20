import { Observable } from 'tns-core-modules/data/observable';
import { StickySwitch } from 'nativescript-sticky-switch';

export class HelloWorldModel extends Observable {
  public message: string;
  private stickySwitch: StickySwitch;

  constructor() {
    super();

    this.stickySwitch = new StickySwitch();
    this.message = this.stickySwitch.message;
  }
}
