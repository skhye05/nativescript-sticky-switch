# Nativescript Sticky Switch

<p><img src="https://raw.githubusercontent.com/skhye05/NativeScript-Sticky-Switch/master/ios.gif"  width="300"/><img src="https://raw.githubusercontent.com/skhye05/NativeScript-Sticky-Switch/master/android.gif" width="300"/></p>

## Installation

```custom
tns plugin add nativescript-sticky-switch
```

## Usage

### Typerscript

#### xml

add the following in your `xml`

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
  xmlns:ui="nativescript-sticky-switch">
  <GridLayout class="p-20">
    <StackLayout verticalAlignment="middle">
        <ui:TNSStickySwitch
          id="mySwitch1"
          checked="true"
          leftText="off"
          width="100"
          mode="1"
          leftIcon="baseline_volume_off_white_36"
          rightText="on"
          rightIcon="baseline_volume_up_white_36"
          textSize="16"
          selectedTextSize="18"
          iconSize="70"
          iconPadding="8"
          backgroundColor="#FF181821"
          switchColor="#FF2371FA"
          textColor="#FF26292D"
          onColor="#FF2371FA"
          offColor="#FF181821"
          circleColor="#FF2371FA"
          animationDuration="600"
          animationType="line"
          textVisible="true"
          class="m-b-20"
        />
    </StackLayout>
  </GridLayout>
</Page>
```

```typescript
```

### Angular

First you need to include the TNSStickySwitchModule in your app.module.ts

```typescript
import { TNSStickySwitchModule } from "nativescript-sticky-switch/angular";

@NgModule({
    imports: [
        TNSStickySwitchModule
    ],
    ...
})
```

and in your `component.html` you can use the code as follows:

```html
<GridLayout class="page">
    <StackLayout verticalAlignment="middle">
        <TNSStickySwitch id="mySwitch1" mode="1" (selectedChange)="onSelectedOne($event)" checked="true" leftText="off"
            width="100" leftIcon="baseline_volume_off_white_36" rightText="on" rightIcon="baseline_volume_up_white_36"
            textSize="16" selectedTextSize="18" iconSize="70" onColor="#FF2371FA" offColor="#FF1818" circleColor="#FF2371FA"
            iconPadding="8" backgroundColor="#FF181821" switchColor="#FF2371FA" textColor="#FF26292D" animationDuration="600"
            animationType="line" textVisible="true" class="m-b-20"></TNSStickySwitch>
    </StackLayout>
</GridLayout>
```

```typescript
```

### Vue

register the element in your app.js or main.js to use in `Vue`

```javascript
Vue.registerElement('TNSStickySwitch', () => require('nativescript-sticky-switch').TNSStickySwitch);
```

and in your `Vue` instance you can use the code as follows:

```html
<template>
    <GridLayout>
        <StackLayout horizontalAlignment="center" verticalAlignment="center">
            <TNSStickySwitch id="mySwitch1" mode="1" checked="true" leftText="off" width="100" leftIcon="baseline_volume_off_white_36" rightText="on" rightIcon="baseline_volume_up_white_36" textSize="16" selectedTextSize="18" iconSize="70" onColor="#FF2371FA" offColor="#FF1818"
                circleColor="#FF2371FA" iconPadding="8" backgroundColor="#FF181821" switchColor="#FF2371FA" textColor="#FF26292D" animationDuration="600" animationType="line" textVisible="true" class="m-b-20" />
        </StackLayout>
    </GridLayout>
</template>
```

```typescript
```

## Author

Jonathan Mayunga, mayunga.j@gmail.com

## Credits

- For Android we're using the [StickySwitch by GwonHyeok](https://github.com/GwonHyeok/StickySwitch)
- For iOS [TKSwitcherCollection by TBXark](https://github.com/TBXark/TKSwitcherCollection).

## License

Apache License Version 2.0, January 2004
