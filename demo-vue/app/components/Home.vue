<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
    
        <GridLayout>
            <StackLayout horizontalAlignment="center" verticalAlignment="center">
                <TNSStickySwitch id="mySwitch1" mode="1" checked="true" leftText="off" width="100" leftIcon="baseline_volume_off_white_36" rightText="on" rightIcon="baseline_volume_up_white_36" textSize="16" selectedTextSize="18" iconSize="70" onColor="#FF2371FA" offColor="#FF1818"
                    circleColor="#FF2371FA" iconPadding="8" backgroundColor="#FF181821" switchColor="#FF2371FA" textColor="#FF26292D" animationDuration="600" animationType="line" textVisible="true" class="m-b-20" />
    
                <TNSStickySwitch #mySwitch2 mode="2" checked="false" width="100" leftIcon="baseline_location_off_white_36" rightIcon="baseline_location_on_white_36" iconSize="70" iconPadding="10" backgroundColor="#196AB7" switchColor="#EB5160" animationDuration="600"
                    animationType="line" textVisible="false" class="m-b-10" />
    
                <TNSStickySwitch #mySwitch3 checked="false" width="100" leftIcon="baseline_bluetooth_disabled_black_36" rightIcon="baseline_bluetooth_black_36" iconSize="70" iconPadding="10" backgroundColor="#99F7AF" switchColor="#76CB89" animationDuration="1000" animationType="line"
                    textVisible="false" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables
    // Custom styles
    .fa {
        color: $accent-dark;
    }
    
    .info {
        font-size: 20;
    }
</style>
