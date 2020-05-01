function createSVG(height, width) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("id", "svg");
    document.body.insertBefore(svg, document.getElementById("patternBox"));
}

function drawXY(x, y) {
    var svg = document.getElementById("svg");
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "5");
    rect.setAttribute("height", "5");
    rect.setAttribute("rx", "1")
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("style", "stroke-width:3;stroke:rgb(0,0,0)");
    svg.appendChild(rect);
}

function drawLine(x1,y1, x2,y2) {
    var svg = document.getElementById("svg");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
}