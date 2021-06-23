"use strict";

function UIloading() {
	return new Promise( resolve => {
		const el = document.querySelector( "#loading" ),
			elTitle = document.querySelector( "#gsTitle" ),
			glitch = new TextGlitch( elTitle );

		el.classList.add( "loaded" );
		if ( window.CSS && CSS.supports( "clip-path: inset(0 1px 2px 3px)" ) ) {
			glitch.on();
		}
		el.onclick = () => {
			glitch.off();
			el.classList.add( "starting" );
			setTimeout( resolve, 100 );
		};
	} );
}

function UIloaded() {
	const el = document.querySelector( "#loading" );

	el.classList.add( "started" );
	setTimeout( () => el.remove(), 800 );

	document.getElementById("site_link").value = window.location;

    document.getElementById("copy_link").onclick = (function () {
        var copyText = document.getElementById("site_link");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        document.getElementById("copy_link").innerHTML = "copied!"
        setTimeout(function () {
            document.getElementById("copy_link").innerHTML = "copy link"
        }, 3000)
    })

	channel.join()
	.receive("ok", resp => { console.log("Joined successfully", resp) })
	.receive("error", resp => { console.log("Unable to join", resp) })

}


window.UIloading= UIloading;
window.UIloaded = UIloaded;