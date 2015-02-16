var dataset = [{'x': 200, 'y': 300, 'r': 50}, 
	       {'x': 300, 'y': 400, 'r': 20},
	       {'x': 420, 'y': 430, 'r': 60},
	       {'x': 160, 'y': 160, 'r': 30},
	       {'x': 220, 'y': 30, 'r': 20}];

var colorScale = d3.scale.category10();

var svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600);

svg.selectAll("circle")
    .data(dataset)
    .enter().append("circle")
    .attr("cx", function(d,i) { return d['x']; })
    .attr("cy", function(d,i) { return d['y']; })
    .attr("r", function(d,i) { return d['r']; })
    .style("fill", function(d,i) { return colorScale(i); });
