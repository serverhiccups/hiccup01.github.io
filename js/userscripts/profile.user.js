// ==UserScript==
// @name        ProfileWizard
// @namespace   https://scratch.mit.edu/users/hiccup01
// @description Makes scratch profiles better
// @include     https://scratch.mit.edu/users/*
// @version     0.7
// @grant       none
// ==/UserScript==
console.log("Running ProfileWizard v0.7");
var aboutme = document.getElementsByClassName(".about");
var status = document.querySelector("textarea[name=status]");
var textarea = status.innerHTML;
var colour = textarea.substr((textarea.indexOf("§") + 1), (textarea.indexOf("§") + 6));
var url = textarea.substr((textarea.indexOf("≤")), (textarea.indexOf("≥")));
colour.toString();
url = encodeURI(url);
var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colour);
if (isOk  == true) {
console.log("Set page colour to: " + colour);
colour = colour.concat(" url(\"", url, "\") repeat"); 
var bler = document.body.style.background = colour;
} else {
 console.log("No colour found or invalid colour.");   
}
≤≥