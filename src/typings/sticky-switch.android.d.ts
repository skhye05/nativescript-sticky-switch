/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />

declare module io {
	export module ghyeok {
		export module stickyswitch {
			export class BuildConfig {
				public static class: java.lang.Class<io.ghyeok.stickyswitch.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module ghyeok {
		export module stickyswitch {
			export module widget {
				export class StickySwitch {
					public static class: java.lang.Class<io.ghyeok.stickyswitch.widget.StickySwitch>;
					public getSliderBackgroundColor(): number;
					public setTypeFace(param0: globalAndroid.graphics.Typeface): void;
					public getYParam(): number;
					public setLeftIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getAnimationType(): io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType;
					public setIconSize(param0: number): void;
                    public setLeftIcon(param0: number): void;
                    public setSelectedTxtSize(param0: number): void;
                    public setTxtSize(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setDirection(param0: io.ghyeok.stickyswitch.widget.StickySwitch.Direction, param1: boolean): void;
					public getSwitchColor(): number;
					public getXParam(): number;
					public getRightIcon(): globalAndroid.graphics.drawable.Drawable;
					public setSliderBackgroundColor(param0: number): void;
					public getLeftIcon(): globalAndroid.graphics.drawable.Drawable;
					public setLeftText(param0: string): void;
					public setSwitchColor(param0: number): void;
					public getOnSelectedChangeListener(): io.ghyeok.stickyswitch.widget.StickySwitch.OnSelectedChangeListener;
					public getTextVisibility(): io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility;
					public setOnSelectedChangeListener(param0: io.ghyeok.stickyswitch.widget.StickySwitch.OnSelectedChangeListener): void;
					public setTextColor(param0: number): void;
					public setAnimationType(param0: io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType): void;
					public onMeasure(param0: number, param1: number): void;
					public setRightText(param0: string): void;
					public setTextVisibility(param0: io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public getLeftText(): string;
					public getText(): string;
					public setIconPadding(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getRightText(): string;
					public getAnimationDuration(): number;
					public getTypeFace(): globalAndroid.graphics.Typeface;
					public constructor(param0: globalAndroid.content.Context);
					public getText(param0: io.ghyeok.stickyswitch.widget.StickySwitch.Direction): string;
					public setRightIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setDirection(param0: io.ghyeok.stickyswitch.widget.StickySwitch.Direction, param1: boolean, param2: boolean): void;
					public getAnimatorSet(): globalAndroid.animation.AnimatorSet;
					public getTextColor(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setAnimationDuration(param0: number): void;
					public getDirection(): io.ghyeok.stickyswitch.widget.StickySwitch.Direction;
					public setDirection(param0: io.ghyeok.stickyswitch.widget.StickySwitch.Direction): void;
					public setAnimatorSet(param0: globalAndroid.animation.AnimatorSet): void;
					public setRightIcon(param0: number): void;
				}
				export module StickySwitch {
					export class AnimationType {
						public static class: java.lang.Class<io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType>;
						public static LINE: io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType;
						public static CURVED: io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType;
						public static valueOf(param0: string): io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType;
						public static values(): native.Array<io.ghyeok.stickyswitch.widget.StickySwitch.AnimationType>;
						public constructor(param0: string, param1: number);
					}
					export class Direction {
						public static class: java.lang.Class<io.ghyeok.stickyswitch.widget.StickySwitch.Direction>;
						public static LEFT: io.ghyeok.stickyswitch.widget.StickySwitch.Direction;
						public static RIGHT: io.ghyeok.stickyswitch.widget.StickySwitch.Direction;
						public static values(): native.Array<io.ghyeok.stickyswitch.widget.StickySwitch.Direction>;
						public constructor(param0: string, param1: number);
						public static valueOf(param0: string): io.ghyeok.stickyswitch.widget.StickySwitch.Direction;
					}
					export class OnSelectedChangeListener {
						public static class: java.lang.Class<io.ghyeok.stickyswitch.widget.StickySwitch.OnSelectedChangeListener>;
						/**
						 * Constructs a new instance of the io.ghyeok.stickyswitch.widget.StickySwitch$OnSelectedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSelectedChange(param0: io.ghyeok.stickyswitch.widget.StickySwitch.Direction, param1: string): void;
						});
						public constructor();
						public onSelectedChange(param0: io.ghyeok.stickyswitch.widget.StickySwitch.Direction, param1: string): void;
					}
					export class TextVisibility {
						public static class: java.lang.Class<io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility>;
						public static VISIBLE: io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility;
						public static INVISIBLE: io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility;
						public static GONE: io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility;
						public static values(): native.Array<io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility>;
						public constructor(param0: string, param1: number);
						public static valueOf(param0: string): io.ghyeok.stickyswitch.widget.StickySwitch.TextVisibility;
					}
					export class WhenMappings {
						public static class: java.lang.Class<io.ghyeok.stickyswitch.widget.StickySwitch.WhenMappings>;
					}
				}
			}
		}
	}
}

//Generics information:

