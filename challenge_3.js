var dataset = [{'r': 50}, 
	       {'r': 20},
	       {'r': 60},
	       {'r': 30},
	       {'r': 20}];

var colorScale = d3.scale.category10();

var svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600);

svg.selectAll("circle")
    .data(dataset)
    .enter().append("circle")
    .attr("cx", function(d,i) { return Math.floor((Math.random() * 400) + 100); })
    .attr("cy", function(d,i) { return Math.floor((Math.random() * 400) + 100); })
    .attr("r", function(d,i) { return d['r']; })
    .style("fill", function(d,i) { return colorScale(i); });
