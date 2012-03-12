$(document).ready(function(){
	var plot2 = $.jqplot ('chartdiv', 
		[[3,7,9,1,5,3,8,2,5]], {
		/*title: 'Energy Levels',*/
		axesDefaults: {
//			labelRenderer: $.jqplot.CanvasAxisLabelRenderer
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

$(function(){
  $("#log-in").click(function(){
    log_in();
  })
  $("#sync").click(function(){
    sync();
  })
// ex: $.post("test.php", { name: "John", time: "2pm" } );
 /* 
  * "access_token": "15a8a7e03452f68ec32f75ea116a9ab8",
  *  "expires_in": "3599",
  *  "refresh_token": "e03e017168a68fdbb3eddbdb1d4bdf533967c8e7"
  */
})

function log_in() { $.post("https://api.nike.com/nsl/v2.0/user/login?app=fuelband&format=json&client_id=c6dd3191b87ad9f48224e9b40a07c07b&client_secret=0a7ab2101babe5fd", {data: fake_data},
     function(response) {
       console.log(response);
     })
}

function sync() {
   // manually got access token from curl
   // body is simulated response from apigee
/*   fake_data='{
        "type": "all_day",                    
        "timeZoneId": "America/Chicago",      
        "startTime": 1331503200000,         
        "duration": 900000,           
        "calories": 33,
        "fuel": 100,
        "steps": 330,
        "distance": 0.099,
        "activeTime": 900,
        "detail": [{
            "name": "data",
            "dataSeries": [{
                "objType": "dataStream",
                "startTime": 1331503200000,
                "intervalType": "time",
                "intervalMetric": "1",
                "intervalUnit": "min",
                "metrics": ["calories", "fuel", "steps", "distance", "activeTime"],
                "value": [
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1],
                    [2, 7, 22, 0.0066, 1]
                ]
            }]
        }],
        "summary": {
            "lastOffset": 1,
            "lastTimeStamp": 1,
            "deviceConfig": [{
                "component": {
                    "id": "a11b22dd-1978-401c-a80b-c66cb1cba708",
                    "type": "fuelband"
                }
            }]
        }
    }'
*/
var fake_data='stuff';
		$.ajax({
      url: "https://api.nike.com/v2.0/me/sync?access_token=15a8a7e03452f68ec32f75ea116a9ab8",
      headers: "appid=FUELBAND",
      data: fake_data,
      success: function(response) {
         console.log(response);
       }
		})
 
}


