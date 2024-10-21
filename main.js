/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    return (Math.round(value*10**d))/10**d
}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
   
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

// Determine the average for two numbers
function average(a,b) {
    return (a+b)/2
}

// Find the difference between two numbers
function delta(a,b) {
    return a-b
}

// Find the slope of a line
function slope(x1,x2,y1,y2) {
    return delta(x1,y2)/delta(y1,y2)
}

// Find the length of a line
function line_length(x1,x2,y1,y2) {
    return Math.sqrt((delta(x1,x2)**2)+(delta(y1,y2)**2))
}

// Find the volume for a rectangular prism
function rect_prism_volume(length,width,height) {
    return length*width*height
}

