import React from 'react';
class Circle1 extends React.Component{
    render(){
    var l=0;
    var r=5;
    return (2*3.14*r*r);
}
}
class Triangle1 extends React.Component{
    render(){
        var b=5;
        var h=6;
        return (0.5*b*h);
}
}
class Square1 extends React.Component{
    render(){
        var a=8;
        return (a*a);
}
}
class Squareper1 extends React.Component{
    render(){
        var a=16;
        return (4*a);
}
}
class Rombus1 extends React.Component{
    render(){
        var b=4;
        var h=2;
        return (b*h);
}
}
export {Circle1,Triangle1,Square1,Squareper1,Rombus1};