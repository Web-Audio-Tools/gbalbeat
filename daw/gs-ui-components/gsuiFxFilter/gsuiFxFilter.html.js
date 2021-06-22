"use strict";

GSUI.setTemplate( "gsui-fx-filter", () => [
	GSUI.createElement( "div", { class: "gsuiFxFilter-area gsuiFxFilter-areaType" },
		GSUI.createElement( "span", { class: "gsuiFxFilter-area-label" }, "type" ),
		GSUI.createElement( "div", { class: "gsuiFxFilter-area-content" },
			GSUI.getTemplate( "gsui-fx-filter-type", "lowpass",   "M 1 4 L 12 4 L 15 8" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "highpass",  "M 1 8 L 4 4 L 15 4" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "bandpass",  "M 1 8 L 8 4 L 15 8" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "lowshelf",  "M 1 8 L 4 8 L 6 4 L 15 4" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "highshelf", "M 1 4 L 10 4 L 12 8 L 15 8" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "peaking",   "M 1 8 L 7 8 L 8 4 L 9 8 L 15 8" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "notch",     "M 1 4 L 7 4 L 8 8 L 9 4 L 15 4" ),
			GSUI.getTemplate( "gsui-fx-filter-type", "allpass",   "M 1 6 L 15 6" ),
		),
	),
	GSUI.createElement( "div", { class: "gsuiFxFilter-area gsuiFxFilter-areaGraph" },
		GSUI.createElement( "span", { class: "gsuiFxFilter-area-label" }, "frequency" ),
		GSUI.createElement( "div", { class: "gsuiFxFilter-area-content" },
			GSUI.createElement( "gsui-curves" ),
		),
	),
	GSUI.createElement( "div", { class: "gsuiFxFilter-area gsuiFxFilter-areaFrequency" },
		GSUI.createElement( "div", { class: "gsuiFxFilter-area-content" },
			GSUI.createElement( "gsui-slider", { type: "linear-x", min: 0, max: 1, step: .0001 } ),
		),
	),
	GSUI.createElement( "div", { class: "gsuiFxFilter-area gsuiFxFilter-areaGain" },
		GSUI.createElement( "span", { class: "gsuiFxFilter-area-label" }, "gain" ),
		GSUI.createElement( "div", { class: "gsuiFxFilter-area-content" },
			GSUI.createElement( "gsui-slider", { type: "linear-y", min: -50, max: 50, step: .1, "mousemove-size": 400 } ),
		),
	),
	GSUI.createElement( "div", { class: "gsuiFxFilter-area gsuiFxFilter-areaQ" },
		GSUI.createElement( "span", { class: "gsuiFxFilter-area-label" }, "Q" ),
		GSUI.createElement( "div", { class: "gsuiFxFilter-area-content" },
			GSUI.createElement( "gsui-slider", { type: "circular", min: .001, max: 25, step: .001, "mousemove-size": 400 } ),
		),
	),
	GSUI.createElement( "div", { class: "gsuiFxFilter-area gsuiFxFilter-areaDetune" },
		GSUI.createElement( "span", { class: "gsuiFxFilter-area-label" }, "detune" ),
		GSUI.createElement( "div", { class: "gsuiFxFilter-area-content" },
			GSUI.createElement( "gsui-slider", { type: "circular", min: -1200, max: 1200, step: 10, "mousemove-size": 400 } ),
		),
	),
] );

GSUI.setTemplate( "gsui-fx-filter-type", ( type, d ) => (
	GSUI.createElement( "button", { class: "gsuiFxFilter-areaType-btn", "data-type": type, title: type },
		GSUI.createElementNS( "svg", { viewBox: "0 0 16 12" },
			GSUI.createElementNS( "path", { d } ),
		),
	)
) );
