var triangleSpec = [
		    {'p': '300,0 150,300 450,300', 
		     'fillColor':'gold',
		     'borderColor':'white'},
		    {'p': '150,300 0,600 300,600', 
		     'fillColor':'gold',
		     'borderColor':'white'},
		    {'p': '450,300 300,600 600,600', 
		     'fillColor':'gold',
		     'borderColor':'white'},

		    {'p': '300,30 170,290 430,290',
		     'fillColor':'yellow',
		     'borderColor':'gold'},
		    {'p': '150,330 20,590 280,590', 
		     'fillColor':'yellow',
		     'borderColor':'gold'},
		    {'p': '450,330 320,590 580,590', 
		     'fillColor':'yellow',
		     'borderColor':'gold'},
    ]

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