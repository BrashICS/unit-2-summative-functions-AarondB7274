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
document.getElementById("cube_volume").addEventListener("click", cube_volume);
document.getElementById("cube_area").addEventListener("click", cube_area);
document.getElementById("sphere_volume").addEventListener("click", sphere_volume);
document.getElementById("sphere_area").addEventListener("click", sphere_area);

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
    let avr = (a+b)/2
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
function line_length() {
    let x1 = Number(document.getElementById("x1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y1 = Number(document.getElementById("y1").value)
    let y2 = Number(document.getElementById("y2").value)
    let length = Math.sqrt((delta(x1,x2)**2)+(delta(y1,y2)**2))
}

// Find the volume for a rectangular prism
function cube_volume() {
    let length = Number(document.getElementById("length").value)
    let width = Number(document.getElementById("width").value)
    let height = Number(document.getElementById("height").value)
    let vol = round_user(length*width*height)
    document.getElementById("geometric_output").textContent = (`The volume of a rectangular prism with those dimensions is ${vol}`)
}

function cube_area() {
    let length = Number(document.getElementById("length").value)
    let width = Number(document.getElementById("width").value)
    let height = Number(document.getElementById("height").value)
    let area = round_user(length*width*2)+(length*height*2)+(width*height*2)
    document.getElementById("geometric_output").textContent = (`The surface area of a rectangular prism with those dimensions is ${area}`)
}

function sphere_volume() {
    let radius = Number(document.getElementById("radius").value)
    let vol = round_user(4/3*Math.PI*radius**3)
    document.getElementById("geometric_output").textContent = (`The volume of a sphere with those dimensions is ${vol}`)
}

function sphere_area() {
    let radius = Number(document.getElementById("radius").value)
    let area = round_user(4*Math.PI*radius**2)
    document.getElementById("geometric_output").textContent = (`The surface area of a sphere with those dimensions is ${area}`)
}