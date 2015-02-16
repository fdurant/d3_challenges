var circleSpec = [{'x': 360, 'y': 100, 'r': 50}, 
		  {'x': 200, 'y': 200, 'r': 20},
		  {'x': 500, 'y': 300, 'r': 20}];

var rectangleSpec = [{'x':300, 'y': 350, 'width': 50, 'height': 20}]

var colorScale = d3.scale.category10();

var svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600);

svg.selectAll("circle")
    .data(circleSpec)
    .enter().append("circle")
    .attr("cx", function(d,i) { return d['x']; })
    .attr("cy", function(d,i) { return d['y']; })
    .attr("r", function(d,i) { return d['r']; })
    .style("fill", function(d,i) { return colorScale(i); });

svg.selectAll("rect")
    .data(rectangleSpec)
    .enter().append("rect")
    .attr("x", function(d,i) { return d['x']; })
    .attr("y", function(d,i) { return d['y']; })
    .attr("width", function(d,i) { return d['width']})
    .attr("height", function(d,i) { return d['height']})
    .style("fill", function(d,i) { return colorScale(8); });
