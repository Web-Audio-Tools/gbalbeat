// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

let socket = new Socket("/socket", {
    logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })
  })

socket.connect();

// Now that you are connected, you can join channels with a topic:
let channel = socket.channel("music:lobby", {})
channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

window.socket = socket;

require("../../daw/src/run.js")