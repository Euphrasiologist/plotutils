/*
* Create a line with coordinates [x1,y1] -> [x2,y2]
*/

export default function() {
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