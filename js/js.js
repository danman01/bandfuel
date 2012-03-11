$(document).ready(function(){
	var plot2 = $.jqplot ('chartdiv', 
		[[3,7,9,1,5,3,8,2,5]], {
		/*title: 'Energy Levels',*/
		axesDefaults: {
			labelRenderer: $.jqplot.CanvasAxisLabelRenderer
		},
		seriesDefaults: {
			rendererOptions: {
				smooth: true
			}
		},
		axes: {
			xaxis: {
				label: "Energy",
				pad: 0
			},
			yaxis: {
				label: "Time"
			}
		}
	});
});

