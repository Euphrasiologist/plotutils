// undefined v1.0.0 Copyright 2020 Max Brown
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.plotutils = global.plotutils || {}));
}(this, (function (exports) { 'use strict';

/*
* Create a segment of a circle.
* Source: https://observablehq.com/@euphrasiologist/julio-le-parc-replications-and-variations
* modified from https://observablehq.com/@harrystevens/semicircle
*/


function makeSegment() {
    let cx = 0, // centre coordinates of the circle
      cy = 0,
      r = 0, // radius of the circle
      angleA = 0,
      angleB = 0;
  
    // Function to convert from an angle to an X and Y position
    // thanks https://stackoverflow.com/questions/53028836/draw-a-circle-divided-in-two-by-chord
    function angleToCoords(angleInDegrees, centreX, centreY, radius) {
      var angleInRadians = (angleInDegrees * Math.PI) / 180;
      return {
        x: centreX + radius * Math.cos(angleInRadians),
        y: centreY + radius * Math.sin(angleInRadians)
      };
    }
  
    function draw(datum) {
      const cx0 = typeof cx === "function" ? cx(datum) : cx,
        cy0 = typeof cy === "function" ? cy(datum) : cy,
        r0 = typeof r === "function" ? r(datum) : r,
        angle0 = typeof angleA === "function" ? angleA(datum) : angleA,
        angle1 = typeof angleB === "function" ? angleB(datum) : angleB,
        A = angleToCoords(angle0, cx0, cy0, r0),
        B = angleToCoords(angle1, cx0, cy0, r0);
  
      return `M ${A.x} ${A.y} L ${B.x} ${B.y} A ${r0} ${r0} 0 1 1 ${A.x} ${A.y} Z`;
    }
  
    draw.cx = function(_) {
      return arguments.length ? ((cx = _), draw) : cx;
    };
    draw.cy = function(_) {
      return arguments.length ? ((cy = _), draw) : cy;
    };
    draw.r = function(_) {
      return arguments.length ? ((r = _), draw) : r;
    };
    draw.angleA = function(_) {
      return arguments.length ? ((angleA = _), draw) : angleA;
    };
    draw.angleB = function(_) {
      return arguments.length ? ((angleB = _), draw) : angleB;
    };
  
    return draw;
  }

/*
* Create a line with coordinates [x1,y1] -> [x2,y2]
*/

function line() {
    let x1 = 0,
      y1 = 0,
      x2 = 0,
      y2 = 0;
  
    function draw(datum) {
      const x10 = typeof x1 === "function" ? x1(datum) : x1,
        y10 = typeof y1 === "function" ? y1(datum) : y1,
        x20 = typeof x2 === "function" ? x2(datum) : x2,
        y20 = typeof y2 === "function" ? y2(datum) : y2;
  
      return `M${x10},${y10}L${x20},${y20}`;
    }
  
    draw.x1 = function(_) {
      return arguments.length ? ((x1 = _), draw) : x1;
    };
    draw.y1 = function(_) {
      return arguments.length ? ((y1 = _), draw) : y1;
    };
    draw.x2 = function(_) {
      return arguments.length ? ((x2 = _), draw) : x2;
    };
    draw.y2 = function(_) {
      return arguments.length ? ((y2 = _), draw) : y2;
    };
  
    return draw;
  }

/*
* Return a random integer between two whole numbers.
* a straight poach from
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

exports.line = line;
exports.makeSegment = makeSegment;
exports.randomInt = randomInt;

Object.defineProperty(exports, '__esModule', { value: true });

})));
