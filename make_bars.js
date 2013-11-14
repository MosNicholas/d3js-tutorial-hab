var dataset = [];

for (var i = 0; i <= 30; i++) {
	dataset.push(Math.floor(Math.random() * 50) + 5);
};

dataset.sort(function(a,b){return a-b});

var width = 900;
var height = 300;
var barWidth = 20;

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
	.attr("width", barWidth)
	.attr("height", function(d) {
		return d * 10;
	})
	.attr("fill", function(d) {
	    return "rgb(0, 131, " + (d * 6) + ")";
	});

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d) {
        return d;
   	})
   	.attr("text-anchor", "middle")
	.attr("x", function(d, i) {
        return i * (width / dataset.length) + barWidth/2;
   	})
   	.attr("y", function(d) {
        return height - (d * 4) + 15;
   	})
   	.attr("fill", "white")
   	.attr("font-size", "11px");