import {
    StickySwitchBase,
    leftTextProperty,
    rightTextProperty,
    textVisibleProperty,
    leftIconProperty,
    rightIconProperty,
    switchColorProperty,
    textColorProperty,
    textSizeProperty,
    selectedTextSizeProperty,
    iconSizeProperty,
    backgroundColorProperty,
    iconPaddingProperty,
    animationTypeProperty,
    animationDurationProperty,
    checkedProperty
} from './sticky-switch.common';

import { Color } from 'tns-core-modules/ui/core/view';

import * as application from 'tns-core-modules/application';

import * as utils from 'tns-core-modules/utils/utils';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

import { View, Property } from 'tns-core-modules/ui/core/view';
import { SelectedChangedEventData } from '.';

class StickySwitch extends View {

    private _androidViewId: number;
    // private _android: any;

    nativeView: io.ghyeok.stickyswitch.widget.StickySwitch;

    constructor(public onCheckedChanged: Function) {
        super();
    }

    get android(): any {
        return this.nativeView;
    }

    createNativeView(): Object {
        const _switch = new io.ghyeok.stickyswitch.widget.StickySwitch(this._context);
        const lp: android.view.ViewGroup.LayoutParams = new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
        (_switch as any).setLayoutParams(lp);

        initializeStickySwitchSelectedListener();

        const onSelectedListener = new StickySwitchSelectedListener(new WeakRef(this));
        _switch.setOnSelectedChangeListener(onSelectedListener);

        return _switch;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        (<any>this.nativeView).setId(this._androidViewId);
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}


interface StickySwitchSelectedListener extends java.lang.Object, io.ghyeok.stickyswitch.widget.StickySwitch.OnSelectedChangeListener {
    /*tslint:disable-next-line no-misused-new*/
    new(owner: WeakRef<StickySwitch>): StickySwitchSelectedListener;
}

let StickySwitchSelectedListener: StickySwitchSelectedListener;


function initializeStickySwitchSelectedListener() {
    if (StickySwitchSelectedListener) {
        return;
    }

    @Interfaces([io.ghyeok.stickyswitch.widget.StickySwitch.OnSelectedChangeListener])
    class StickySwitchSelectedListenerImpl extends java.lang.Object implements io.ghyeok.stickyswitch.widget.StickySwitch.OnSelectedChangeListener {
        constructor(private owner: WeakRef<StickySwitch>) {
            super();

            return global.__native(this);
        }

        public onSelectedChange(direction: any, text: string) {
            const owner = this.owner.get();

            if (owner.nativeView.getDirection().toString() === 'LEFT') {
                owner.onCheckedChanged(false, direction, text);
                // checkedProperty.nativeValueChange(owner, false);
            } else if (owner.nativeView.getDirection().toString() === 'RIGHT') {
                // checkedProperty.nativeValueChange(owner, true);
                owner.onCheckedChanged(true, direction, text);
            }
        }
    }

    StickySwitchSelectedListener = StickySwitchSelectedListenerImpl as any;
}

let builder = require('tns-core-modules/ui/builder');

export class TNSStickySwitch extends StickySwitchBase {

    private _stickySwitch: StickySwitch;
    private innerComponent: StackLayout;

    constructor() {
        super();
        const owner = this;
        this._stickySwitch = new StickySwitch((value: boolean, direction: any, text: any) => {
            checkedProperty.nativeValueChange(owner, value);

            owner.notify({
                eventName: 'selectedChange',
                object: owner,
                direction: direction,
                text: text
            } as SelectedChangedEventData);
        });
        this.innerComponent = new StackLayout();
        this.innerComponent.bindingContext = this;

        this.innerComponent.addChild(this._stickySwitch);
        this.addChild(this.innerComponent);
    }

    // onLoaded(): void {
    //     super.onLoaded();
    //     this._stickySwitch.visibility = "hidden";
    // }

    // VALUE
    public [checkedProperty.getDefault](): boolean {
        return false;
    }

    public [checkedProperty.setNative](value: boolean) {
        if (value === true) {
            this._stickySwitch.android.setDirection(io.ghyeok.stickyswitch.widget.StickySwitch.Direction.RIGHT);
        } else if (value === false) {
            this._stickySwitch.android.setDirection(io.ghyeok.stickyswitch.widget.StickySwitch.Direction.LEFT);
        }
    }

    // TEXT PROPERTIES
    [leftTextProperty.setNative](value: string) {
        this._stickySwitch.android.setLeftText(value);
    }

    [rightTextProperty.setNative](value: string) {
        this._stickySwitch.android.setRightText(value);
    }

    [textVisibleProperty.setNative](value: boolean) {
        if (value !== undefined || value !== null) {
            const _textVisibility = io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility;
            this._stickySwitch.android.setTextVisibility(value ? _textVisibility.VISIBLE : _textVisibility.INVISIBLE);
        }
    }

    [textSizeProperty.setNative](value: string) {
        if (value) {
            const size = parseFloat(value) * application.android.foregroundActivity.getResources().getDisplayMetrics().scaledDensity;
            this._stickySwitch.android.setTxtSize(size);
        }
    }

    [selectedTextSizeProperty.setNative](value: string) {
        if (value) {
            const size = parseFloat(value) * application.android.foregroundActivity.getResources().getDisplayMetrics().scaledDensity;
            this._stickySwitch.android.setSelectedTxtSize(size);
        }
    }

    // ICONS PROPERTES
    [leftIconProperty.setNative](value: string) {
        if (value) {
            let id = utils.ad.resources.getDrawableId(value);
            let icon = application.android.foregroundActivity.getResources().getDrawable(id);
            this._stickySwitch.android.setLeftIcon(icon);
        }
    }

    [rightIconProperty.setNative](value: string) {
        if (value) {
            let id = utils.ad.resources.getDrawableId(value);
            let icon = application.android.foregroundActivity.getResources().getDrawable(id);
            this._stickySwitch.android.setRightIcon(icon);
        }
    }

    [iconSizeProperty.setNative](value: string) {
        if (value) {
            this._stickySwitch.android.setIconSize(parseInt(value));
        }
    }

    [iconPaddingProperty.setNative](value: string) {
        if (value) {
            this._stickySwitch.android.setIconPadding(parseInt(value));
        }
    }

    // COLORS PROPERTIES
    [backgroundColorProperty.setNative](value: string) {
        if (value) {
            this._stickySwitch.android.setSliderBackgroundColor(new Color(value).android);
        }
    }

    [switchColorProperty.setNative](value: string) {
        if (value) {
            this._stickySwitch.android.setSwitchColor(new Color(value).android);
        }
    }

    [textColorProperty.setNative](value: string) {
        if (value) {
            this._stickySwitch.android.setTextColor(new Color(value).android);
        }
    }

    // ANIMATION
    [animationDurationProperty.setNative](value: string) {
        if (value) {
            this._stickySwitch.android.setAnimationDuration(parseInt(value));
        }
    }

    [animationTypeProperty.setNative](value: string) {
        const _type = value.toLowerCase();
        const _animationType = io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType;

        switch (_type) {
            case 'line':
                this._stickySwitch.android.setAnimationType(_animationType.LINE);
                break;
            case 'curved':
                this._stickySwitch.android.setAnimationType(_animationType.CURVED);
                break;

            default:
                break;
        }
    }
}
