import React from 'react';
function Circle(){
    var l=0;
    var r=5;
    return (2*3.14*r*r);
}
function Triangle(){
    var b=5;
    var h=6;
    return (0.5*b*h);
}
function Square(){
    var a=8;
    return (a*a);
}
function Squareper(){
    var a=16;
    return (4*a);
}
function Rombus(){
    var b=4;
    var h=2;
    return (b*h);
}
export {Circle,Triangle,Square,Squareper,Rombus};