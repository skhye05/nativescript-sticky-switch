
declare class TKBaseSwitch extends UIControl {

	static alloc(): TKBaseSwitch; // inherited from NSObject

	static appearance(): TKBaseSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKBaseSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKBaseSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKBaseSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKBaseSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKBaseSwitch; // inherited from UIAppearance

	static new(): TKBaseSwitch; // inherited from NSObject

	animateDuration: number;

	isOn: boolean;
}

declare class TKExchangeSwitch extends TKBaseSwitch {

	static alloc(): TKExchangeSwitch; // inherited from NSObject

	static appearance(): TKExchangeSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKExchangeSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKExchangeSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKExchangeSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKExchangeSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKExchangeSwitch; // inherited from UIAppearance

	static new(): TKExchangeSwitch; // inherited from NSObject

	lineColor: UIColor;

	lineSize: number;

	offColor: UIColor;

	onColor: UIColor;

	changeValue(): void;
}

declare class TKLiquidSwitch extends TKBaseSwitch {

	static alloc(): TKLiquidSwitch; // inherited from NSObject

	static appearance(): TKLiquidSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKLiquidSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKLiquidSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKLiquidSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKLiquidSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKLiquidSwitch; // inherited from UIAppearance

	static new(): TKLiquidSwitch; // inherited from NSObject

	offColor: UIColor;

	onColor: UIColor;
}

declare class TKSimpleSwitch extends TKBaseSwitch {

	static alloc(): TKSimpleSwitch; // inherited from NSObject

	static appearance(): TKSimpleSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSimpleSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSimpleSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKSimpleSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSimpleSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKSimpleSwitch; // inherited from UIAppearance

	static new(): TKSimpleSwitch; // inherited from NSObject

	circleColor: UIColor;

	lineColor: UIColor;

	lineSize: number;

	offColor: UIColor;

	onColor: UIColor;

	rotateWhenValueChange: boolean;

	changeValue(): void;
}

declare class TKSmileSwitch extends TKBaseSwitch {

	static alloc(): TKSmileSwitch; // inherited from NSObject

	static appearance(): TKSmileSwitch; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSmileSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSmileSwitch; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKSmileSwitch; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSmileSwitch; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TKSmileSwitch; // inherited from UIAppearance

	static new(): TKSmileSwitch; // inherited from NSObject

	changeValue(): void;
}

declare var TKSwitcherCollectionVersionNumber: number;

declare var TKSwitcherCollectionVersionString: interop.Reference<number>;
