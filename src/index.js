import * as blurfunc from "./blur"

import * as txteffects from "./textEffects"



// Section that is executed at startup

window.addEventListener('load', blurfunc.onLoadHandler, { once: true })
//document.querySelector('blink-element').innerHTML += "|"

window.addEventListener("scroll", blurfunc.blur)

const element = document.querySelector("#hello")

setTimeout(() => txteffects.textTyping(element, txteffects.message), 500)

const blink = document.getElementsByClassName('hello-there blink-element')
blink[0].innerHTML += "|"
