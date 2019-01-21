import { View, booleanConverter } from 'tns-core-modules/ui/core/view';
import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Property } from 'tns-core-modules/ui/core/properties';
import { Color } from 'tns-core-modules/color/color';

export abstract class StickySwitchBase extends StackLayout {
    public checked: boolean;

    public _onCheckedPropertyChanged(stickySwitch: StickySwitchBase, oldValue, newValue) {
        if (!this.nativeView) {
            return;
        }

        checkedProperty.nativeValueChange(this, newValue);
    }

}

function onCheckedPropertyChanged(stickySwitch: StickySwitchBase, oldValue, newValue) {
    stickySwitch._onCheckedPropertyChanged(stickySwitch, oldValue, newValue);
}

// VALUE
export const checkedProperty = new Property<StickySwitchBase, boolean>({
    name: 'checked',
    defaultValue: false,
    valueConverter: booleanConverter,
    valueChanged: onCheckedPropertyChanged
});
checkedProperty.register(StickySwitchBase);

// TEXT

export const leftTextProperty = new Property<StickySwitchBase, string>(
    {
        name: 'leftText',
    }
);
leftTextProperty.register(StickySwitchBase);

export const rightTextProperty = new Property<StickySwitchBase, string>(
    {
        name: 'rightText',
    }
);
rightTextProperty.register(StickySwitchBase);

export const textVisibleProperty = new Property<StickySwitchBase, boolean>(
    {
        name: 'textVisible',
        valueConverter: booleanConverter,
    }
);
textVisibleProperty.register(StickySwitchBase);

export const textSizeProperty = new Property<StickySwitchBase, string>(
    {
        name: 'textSize',
    }
);
textSizeProperty.register(StickySwitchBase);

export const selectedTextSizeProperty = new Property<StickySwitchBase, string>(
    {
        name: 'selectedTextSize'
    }
);
selectedTextSizeProperty.register(StickySwitchBase);

// ICONS

export const leftIconProperty = new Property<StickySwitchBase, string>(
    {
        name: 'leftIcon'
    }
);
leftIconProperty.register(StickySwitchBase);

export const rightIconProperty = new Property<StickySwitchBase, string>(
    {
        name: 'rightIcon'
    }
);
rightIconProperty.register(StickySwitchBase);

export const iconSizeProperty = new Property<StickySwitchBase, string>(
    {
        name: 'iconSize'
    }
);
iconSizeProperty.register(StickySwitchBase);

export const iconPaddingProperty = new Property<StickySwitchBase, string>(
    {
        name: 'iconPadding'
    }
);
iconPaddingProperty.register(StickySwitchBase);

// COLORS

export const backgroundColorProperty = new Property<StickySwitchBase, string>(
    {
        name: 'backgroundColor',
    }
);
backgroundColorProperty.register(StickySwitchBase);

export const switchColorProperty = new Property<StickySwitchBase, string>(
    {
        name: 'switchColor',
    }
);
switchColorProperty.register(StickySwitchBase);

export const textColorProperty = new Property<StickySwitchBase, string>(
    {
        name: 'textColor'
    }
);
textColorProperty.register(StickySwitchBase);

// ANIMATIONS
export const animationDurationProperty = new Property<StickySwitchBase, string>(
    {
        name: 'animationDuration'
    }
);
animationDurationProperty.register(StickySwitchBase);

export const animationTypeProperty = new Property<StickySwitchBase, string>(
    {
        name: 'animationType'
    }
);
animationTypeProperty.register(StickySwitchBase);

// iOS

export const modeProperty = new Property<StickySwitchBase, number>(
    {
        name: 'mode',
        valueConverter: (v) => parseInt(v)
    }
);
modeProperty.register(StickySwitchBase);

export const onColorProperty = new Property<StickySwitchBase, Color>(
    {
        name: 'onColor',
        equalityComparer: Color.equals,
        valueConverter: v => new Color(v)
    }
);
onColorProperty.register(StickySwitchBase);

export const offColorProperty = new Property<StickySwitchBase, Color>(
    {
        name: 'offColor',
        equalityComparer: Color.equals,
        valueConverter: v => new Color(v)
    }
);
offColorProperty.register(StickySwitchBase);

export const lineColorProperty = new Property<StickySwitchBase, Color>(
    {
        name: 'lineColor',
        equalityComparer: Color.equals,
        valueConverter: v => new Color(v)
    }
);
lineColorProperty.register(StickySwitchBase);

export const circleColorProperty = new Property<StickySwitchBase, Color>(
    {
        name: 'circleColor',
        equalityComparer: Color.equals,
        valueConverter: v => new Color(v)
    }
);
circleColorProperty.register(StickySwitchBase);

