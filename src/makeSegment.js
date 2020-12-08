/*
* Create a segment of a circle.
* Source: https://observablehq.com/@euphrasiologist/julio-le-parc-replications-and-variations
* modified from https://observablehq.com/@harrystevens/semicircle
*/


export default function() {
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