var triangleSpec = [{'p': '200,10 250,190 160,210', 
		     'fillColor':'yellow',
		     'borderColor':'blue'}]

var colorScale = d3.scale.category10();

var svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600);

svg.selectAll("polygon")
    .data(triangleSpec)
    .enter().append("polygon")
    .attr("points", function(d,i) { return d.p; })
    .style("fill", function(d,i) { return d.fillColor })
    .style("stroke", function(d,i) { return d.borderColor });