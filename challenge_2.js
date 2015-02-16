var dataset = [{'x': 100, 'y': 100, 'r': 50}, 
	       {'x': 200, 'y': 200, 'r': 20},
	       {'x': 300, 'y': 300, 'r': 60},
	       {'x': 400, 'y': 400, 'r': 30},
	       {'x': 500, 'y': 500, 'r': 20}];

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
