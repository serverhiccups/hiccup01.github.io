// ==UserScript==
// @name        ProfileWizard
// @namespace   https://scratch.mit.edu/users/hiccup01
// @description Makes scratch profiles better
// @include     https://scratch.mit.edu/users/*
// @version     0.3
// @grant       none
// ==/UserScript==
console.log("Running ProfileWizard v0.3");
var aboutme = document.getElementsByClassName(".about");
var zstatus = document.querySelector("textarea[name=status]");
var textarea = zstatus.innerHTML;
var colour = textarea.substr((textarea.indexOf("§") + 1), (textarea.indexOf("§") + 6));
colour.toString();
var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colour);
if (isOk  == true) {
console.log("Set page colour to: " + colour);
colour = colour.concat(" none"); 
var bler = document.body.style.background = colour;
} else {
 console.log("No colour found or invalid colour.");   
}
