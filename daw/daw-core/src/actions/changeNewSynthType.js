"use strict";

DAWCore.actions.changeNewSynthType = ( id, type, get ) => {
    const syn = get.synth( id );

    // syn.type = type;
    console.log(syn);

    return [
        { synths: { [ id ]: { type } } },
        [ "synths", "renameSynth", syn.name, type ],
    ];
};
