import { StickySwitchBase, backgroundColorProperty, switchColorProperty, modeProperty, onColorProperty, offColorProperty, lineColorProperty, circleColorProperty } from './sticky-switch.common';
import { Color } from 'tns-core-modules/color/color';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { View, Property } from 'tns-core-modules/ui/core/view';

class StickySimpleSwitch extends View {
    nativeView;

    public createNativeView(): Object {
        const _switch: TKSimpleSwitch = TKSimpleSwitch.alloc().init();
        return _switch;
    }

    get ios(): any {
        return this.nativeView;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}

class StickyLiquidSwitch extends View {
    nativeView;

    public createNativeView(): Object {
        const _switch: TKLiquidSwitch = TKLiquidSwitch.alloc().init();
        return _switch;
    }

    get ios(): any {
        return this.nativeView;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}

class StickyExchangeSwitch extends View {

    nativeView;

    public createNativeView(): Object {
        const _switch: TKExchangeSwitch = TKExchangeSwitch.alloc().init();
        return _switch;
    }

    get ios(): any {
        return this.nativeView;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}

class StickySmileSwitch extends View {

    nativeView;

    public createNativeView(): Object {
        const _switch: TKSmileSwitch = TKSmileSwitch.alloc().init();
        return _switch;
    }

    get ios(): any {
        return this.nativeView;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}

class TapHandler extends NSObject {

    public tap(nativeButton: TKSimpleSwitch, nativeEvent: _UIEvent) {
        // Gets the owner from the nativeView.
        console.log('KKKK');
        const owner: StickySimpleSwitch = (<any>nativeButton).owner;
        if (owner) {

            // owner.notify({ eventName: MyButtonBase.tapEvent, object: owner });
        }
    }

    public static ObjCExposedMethods = {
        "tap": { returns: interop.types.void, params: [interop.types.id, interop.types.id] }
    };
}

const handler = TapHandler.new();

export class TNSStickySwitch extends StickySwitchBase {

    private _sSimple: StickySimpleSwitch;
    private _sSmile: StickySmileSwitch;
    private _sLiquid: StickyLiquidSwitch;
    private _sExchange: StickyExchangeSwitch;

    private _mode: number = 0;

    private innerComponent: StackLayout;

    constructor() {
        super();


        this._sSimple = new StickySimpleSwitch();
        this._sSmile = new StickySmileSwitch();
        this._sLiquid = new StickyLiquidSwitch();
        this._sExchange = new StickyExchangeSwitch();

        this.innerComponent = new StackLayout();
        this.innerComponent.bindingContext = this;
        const mainLayout: StackLayout = new StackLayout();
        mainLayout.className = "p-l-5 p-r-5";
        mainLayout.addChild(this._sSimple);
        mainLayout.addChild(this._sSmile);
        mainLayout.addChild(this._sLiquid);
        mainLayout.addChild(this._sExchange);

        this.innerComponent.addChild(mainLayout);

        this.addChild(this.innerComponent);
    }

    onLoaded(): void {
        super.onLoaded();
        this._sSimple.visibility = "collapse";
        this._sSmile.visibility = "collapse";
        this._sLiquid.visibility = "collapse";
        this._sExchange.visibility = "collapse";

        switch (this._mode) {
            case 1:
                this._sLiquid.visibility = "visible";
                break;
            case 2:
                this._sExchange.visibility = "visible";
                break;
            case 3:
                this._sSmile.visibility = "visible";
                break;
            default:
                this._sSimple.visibility = "visible";
                break;
        }

    }

    [modeProperty.setNative](value: number) {
        this._mode = value;
    }

    [onColorProperty.setNative](value: Color) {
        (this._sSimple.ios as TKSimpleSwitch).onColor = value.ios;
        (this._sLiquid.ios as TKLiquidSwitch).onColor = value.ios;
        (this._sExchange.ios as TKExchangeSwitch).onColor = value.ios;
    }

    [offColorProperty.setNative](value: Color) {
        (this._sSimple.ios as TKSimpleSwitch).offColor = value.ios;
        (this._sLiquid.ios as TKLiquidSwitch).offColor = value.ios;
        (this._sExchange.ios as TKExchangeSwitch).offColor = value.ios;
    }

    [lineColorProperty.setNative](value: Color) {
        (this._sSimple.ios as TKSimpleSwitch).lineColor = value.ios;
        (this._sExchange.ios as TKExchangeSwitch).lineColor = value.ios;
    }

    [circleColorProperty.setNative](value: Color) {
        (this._sSimple.ios as TKSimpleSwitch).circleColor = value.ios;
    }

    [modeProperty.setNative](value: number) {
        this._mode = value;
    }

}