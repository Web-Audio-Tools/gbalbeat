"use strict";

const UImainAnalyser = new gsuiSpectrum();

function UImainAnalyserInit() {
	UImainAnalyser.setCanvas( DOM.headAnalyser );
	UImainAnalyser.setResolution( 140 );
}

window.UImainAnalyserInit = UImainAnalyserInit;

window.UImainAnalyser = UImainAnalyser;