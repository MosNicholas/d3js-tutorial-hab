d3.select("body").selectAll("div")
	.data([1,2,3,4,5,6,7,8,9,10])
	.enter()
	.append("div")
    .attr("class", "bar")
    .style("height", function(d) {
        var barHeight = d * 5;
        return barHeight + "px";
    });