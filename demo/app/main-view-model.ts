import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame';
// import { StickySwitch, SelectedChangedEventData } from 'nativescript-sticky-switch';

export class HelloWorldModel extends Observable {

  // private mySwitch1: StickySwitch;
  // private mySwitch2: StickySwitch;
  // private mySwitch3: StickySwitch;

  constructor(page: Page) {
    super();

    // this.mySwitch1 = page.getViewById<StickySwitch>("mySwitch1");
    // this.mySwitch1.on('selectedChange', this.onSelectedOne);

    // this.mySwitch2 = page.getViewById<StickySwitch>("mySwitch2");
    // this.mySwitch2.on('selectedChange', this.onSelectedTwo);

    // this.mySwitch3 = page.getViewById<StickySwitch>("mySwitch3");
    // this.mySwitch3.on('selectedChange', this.onSelectedThree);
  }

  // public onSelectedOne(args: SelectedChangedEventData) {
  //   console.log("Now Selected : " + args.direction.name() + ", Current Text : " + args.text);
  // }

  // public onSelectedTwo(args: SelectedChangedEventData) {
  //   const s2 = topmost().getViewById<StickySwitch>("mySwitch2");
  //   console.log("Now Selected : " + args.direction.name() + ", Checked : " + s2.checked);
  // }

  // public onSelectedThree(args: SelectedChangedEventData) {
  //   const s3 = topmost().getViewById<StickySwitch>("mySwitch3");
  //   console.log("Now Checked : " + s3.checked);
  // }
}
