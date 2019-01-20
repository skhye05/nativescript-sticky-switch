import { Component, OnInit } from "@angular/core";
import { SelectedChangedEventData } from 'nativescript-sticky-switch';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onSelectedOne(args: SelectedChangedEventData):void {
        console.log("Now Selected : " + args.direction.name() + ", Current Text : " + args.text);
      }
    
      public onSelectedTwo(args: SelectedChangedEventData, s2:any):void {
        //const s2 = topmost().getViewById<StickySwitch>("mySwitch2");
        console.log("Now Selected : " + args.direction.name() + ", Checked : " + s2.checked);
      }
    
      public onSelectedThree(args: SelectedChangedEventData, s3):void {
        console.log("Now Checked : " + s3.checked);
      }
}
