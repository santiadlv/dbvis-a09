/**
 * IMPORTANT NOTICE:
 * 
 * The data is provided by the data.js file.
 * Make sure the data.js file is loaded before the index.js file, so that you can acces it here!
 * The data is provided in an array called: data
 * 
 * Special thanks to Mike Bostock for his work in D3 and Observable, and for providing helpful references
 * for this assignment. You can find some of his work here: https://observablehq.com/@d3/splom
 * 
 * Authors: Santiago Alcerreca and Michael Ruckstuhl
 */

const size = 120,
      padding = 20,
      margin = 2;

var xScale = d3.scaleLinear()
    .range([margin + padding / 2, size - margin - padding / 2]);

var yScale = d3.scaleLinear()
    .range([margin + padding / 2, size - margin - padding / 2]);

var features = Object.keys(data[0]);
var num = features.length;

var featureScale = d3.scaleBand()
    .domain(features)
    .range([0, size * num]);

var fsTop = d3.axisTop()
    .scale(featureScale)
    .ticks(num);

var fsLeft = d3.axisLeft()
    .scale(featureScale)
    .ticks(num);

var domainList = {}
features.forEach(d => {
    domainList[d] = d3.extent(data, m => m[d])
});

var svg = d3.select('svg#matrix')
            .attr('width', size * num + 2 * padding)
            .attr('height', size * num + 2 * padding)
          .append('g')
            .attr('class', 'vis-g')
            .attr('transform', 'translate(' + 2 * padding + ',' + padding + ')');

var xAxis = svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + padding / 2 + ")")
    .call(fsTop)
        .selectAll("text")
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "1.2em");

var yAxis = svg.append("g")
    .attr("class", "y-axis")
    .call(fsLeft)
        .selectAll("text")
        .attr("transform", "translate(" + -padding / 2 + "," + -padding / 2 + ")rotate(-90)")
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "1.2em");

var cell = svg.selectAll(".cell")
    .data(cross(features, features))
    .enter()
  .append("g")
    .attr("class", "cell")
    .attr("transform", function(d) { return "translate(" + d.i * size + "," + d.j * size + ")"; })
    .each(plot);

cell.filter(function(d) { return d.i !== d.j && d.i < d.j; })
    .each(scatter);

cell.filter(function(d) { return d.i !== d.j && d.i > d.j; })
    .each(pearson_correlation);

cell.filter(function(d) { return d.i === d.j; })
    .each(histogram);

function plot(p) {
    var cell = d3.select(this);
    cell.append("rect")
       .attr("class", "frame")
       .attr("x", padding / 2)
       .attr("y", padding / 2)
       .attr("width", size - padding)
       .attr("height", size - padding);
}

function scatter(p) {
   var cell = d3.select(this);
   xScale.domain(domainList[p.x]);
   yScale.domain(domainList[p.y]);
       
   cell.selectAll("circle")
       .data(data)
       .enter()
     .append("circle")
       .attr("class", "point")
       .attr("cx", function(d) { return xScale(d[p.x]); })
       .attr("cy", function(d) { return yScale(d[p.y]); })
       .attr("r", 2)
}

function histogram(p) {
   var cell = d3.select(this);
   xScale.domain(d3.extent(data, d => d[p.x]));

   const binner = d3.bin()
        .domain(xScale.domain());
   const bins = binner(data.map((d => d[p.x])));

   yScale.domain([0, d3.max(bins, d => d.length)]);
   yScale.range([0, 100]);

   cell.selectAll(null)
        .data(bins)
        .enter()
      .append("rect")
        .attr("x", d => xScale(d.x0))
        .attr("y", d => 100 - yScale(d.length) + padding / 2)
        .attr("width", d => (xScale(d.x1) - xScale(d.x0) - 1))
        .attr("height", d => (yScale(d.length)))
        .style("fill", d3.color("steelblue"))
}

function pearson_correlation(p) {
    var cell = d3.select(this);

    let x = data.map(d => d[p.x]),
        y = data.map(d => d[p.y]),
        count = data.length,
        xMean = d3.mean(x),
        yMean = d3.mean(y),
        productSum = d3.sum(data.map(d => d[p.x] * d[p.y])),
        xSquareSum = d3.sum(x.map(d => Math.pow(d, 2))),
        ySquareSum = d3.sum(y.map(d => Math.pow(d, 2))),
        xSqrt = Math.sqrt(xSquareSum - (count * Math.pow(xMean, 2))),
        ySqrt = Math.sqrt(ySquareSum - (count * Math.pow(yMean, 2)));
        
    let result = (productSum - (count * xMean * yMean)) / (xSqrt * ySqrt);

    cell.append("text")
        .attr("class", "correlation")
        .attr("x", 2 * padding)
        .attr("y", 3 * padding)
        .text(result.toFixed(2));
}

function cross(a, b) {
  var c = [], n = a.length, m = b.length, i, j;
  for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
  return c;
}