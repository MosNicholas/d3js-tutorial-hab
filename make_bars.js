var dataset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var width = 700;
var height = 300;

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("y", function(d) {
		return height - d*4;
	})
	.attr("x", function(d, i) {
	    return i * (width / dataset.length);
	})
	.attr("width", 20)
	.attr("height", function(d) {
		return d * 10;
	})
	.attr("fill", function(d) {
	    return "rgb(0, 131, " + (d * 10) + ")";
	});