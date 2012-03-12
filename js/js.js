var g_index = 0;

var g_concerts = [
	{
		artist: 'Guns N Roses',
		venue: 'The Fillmore',
		city: 'San Francisco',
		date: '3/11/12',
		avg_energy: '912',
		total_energy: 912 * 412,
		bands: '412'
	},	
	{
		artist: 'Lady Gaga',
		venue: 'The Warfield',
		city: 'San Francisco',
		date: '3/11/12',
		avg_energy: '829',
		total_energy: 913 * 829,
		bands: '913'
	},
	{
		artist: 'OFWGKTA',
		venue: 'Slims',
		city: 'San Francisco',
		date: '3/11/12',
		avg_energy: '1013',
		total_energy: '234 003',
		bands: '231'
	},	
];

function set_concert(index)
{
	g_index = index;

	$('#your-wrapper').show();

	var concert = g_concerts[index];

	$('#your-concert').html('');

	$('#your-concert').append('' + 
		'<div class="event">' +
			'<div class="info">' + 
				'<h1>' + concert.artist + '</h1><br>' +
				'@' + concert.venue + ', ' + concert.date + '<br>' +
				concert.bands + ' Nike FuelBands' +
			'</div>' +
			'<div class="energies">' +
				'<span class="energy">Your Energy: ' + concert.avg_energy + '</span><br>' +
				'<span class="energy">Total Energy: ' + concert.total_energy + '</span>' +
			'</div>' +
			'<div class="clear"></div>' +
		'</div>' +
		'<div id="chartdiv" style="height:400px;width:700px;"></div>' +
	'');

	var userPoints = [];
	  for (var i=0; i<10; i+=1){
	    userPoints.push([i, 2*Math.sin(i-.8)]);
	  }
	var avgPoints = [];
  	for (var i=0; i<10; i+=1){
     	avgPoints.push([i, 2.5 + Math.pow(i/4, 2)]);
  	}

	change_avg_graph();
	create_graph(userPoints, avgPoints);
	

}


function create_graph(userPoints, avgPoints)
{
	if (g_index == 0)
	{

		var plot2 = $.jqplot ('chartdiv', 
			[userPoints,avgPoints], {
			
		  series: [
				{
					lineWidth:2,
					markerOptions: { style:'dimaond' }
				},
				{
					lineWidth:2,
					markerOptions: { style:'circle' }
				}
			],
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
					label: "Time",
					pad: 0
				},
				yaxis: {
					label: "Energy"
				}
			}
			
		});
	}
	else
	{

		var plot2 = $.jqplot ('chartdiv', 
			[avgPoints], {
			
		  series: [
				{
					lineWidth:2,
					markerOptions: { style:'circle' }
				}
			],
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
					label: "Time",
					pad: 0
				},
				yaxis: {
					label: "Energy"
				}
			}
			
		});
	}

}

$(document).ready(function(){
	
	$('#selector').change(function()
	{
//		console.log('hmm: ' + $(this).val());
		set_concert(0);
	});


	var selectorString = '<select>';

	selectorString += '<option value="nothing">' + g_concerts.length + ' recent concerts in your area</option>';
		  
	for (var index in g_concerts)
	{
		var concert = g_concerts[index];

		selectorString += '<option value="' + index + '">' + concert['artist'] + ' @ ' + concert['venue'] + '</option>';

		$('#highest-energy-concerts').append('' +
			'<a href="#name" onClick="set_concert(' + index + ');">' +
			'<div class="event">' +
				'<div class="info">' +
					'<h1>' + concert['artist'] + '</h1><br>' +
					'@ ' + concert.venue + ', ' + concert.date + '<br>' +
					concert.bands + ' Nike FuelBands' +
				'</div>' +
				'<div class="energies">' +
					'<span class="energy">Avg Energy: ' + concert.avg_energy + '</span><br>' +
					'<span class="energy">Total Energy: ' + concert.total_energy + '</span>' +
				'</div>' +
				'<div class="clear"></div>' +
			'</div>' +
			'</a>' +
		'');	
	}

	$('#selector').append(selectorString);
});

function change_user_graph()
{
	num=Math.random()
	if (num>.5){
	var userPoints = [];
	  for (var i=0; i<10; i+=1){
	    userPoints.push([i, 2*Math.sin(i-Math.random())]);
	  }
	}
	else {
		var userPoints = [];
		  for (var i=0; i<10; i+=1){
		    userPoints.push([i, 2*Math.cos(i-Math.random())]);
		  }
		}
		
	// keep avg points the same
		
		var avgPoints = [];
	  for (var i=0; i<10; i+=1){
	     avgPoints.push([i, 2.5 + Math.pow(i/4, 2)]);
	  }
}

function change_avg_graph(){
	num=Math.random()
	if (num>.5){
		var avgPoints = [];
	  for (var i=0; i<10; i+=1){
	     avgPoints.push([i, 2.5 + Math.cos(i/4, 2)]);
	  }
	}
	else {
		var avgPoints = [];
	  for (var i=0; i<10; i+=1){
	     avgPoints.push([i, 3.5 + Math.pow(i/4, 2)]);
	  }
	}
		
	// keep user points the same
		
		var userPoints = [];
		  for (var i=0; i<10; i+=1){
		    userPoints.push([i, 2*Math.sin(i-.8)]);
		  }
	
}
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

function log_in() {
	/* $.post("https://api.nike.com/nsl/v2.0/user/login?app=fuelband&format=json&client_id=c6dd3191b87ad9f48224e9b40a07c07b&client_secret=0a7ab2101babe5fd", {email: "sxsw_1331485407181@nikeqa.com", password:"nike"},
     function(response) {
       console.log(response);
     })
*/
$("#log-in").delay(200).html("Welcome, FastRunner42!")
$("#sync-container").show();
}

function sync() {
  alert("syncing...");
	$("#my_data").show();
 change_user_graph();
 	 // manually got access token from curl
   // body is simulated response from apigee
/*
   fake_data='{' +
        '"type": "all_day",  '                  +
        '"timeZoneId": "America/Chicago", '     +
        '"startTime": 1331503200000,'         +
        '"duration": 900000,'           +
        '"calories": 33,'+
        '"fuel": 100,'+
        '"steps": 330,'+
        '"distance": 0.099,'+
        '"activeTime": 900,'+
        '"detail": [{'+
            '"name": "data",'+
            '"dataSeries": [{'+
                '"objType": "dataStream",'+
                '"startTime": 1331503200000,'+
                '"intervalType": "time",'+
                '"intervalMetric": "1",'+
                '"intervalUnit": "min",'+
                '"metrics": ["calories", "fuel", "steps", "distance", "activeTime"],'+
                '"value": ['+
                    '[2, 7, 22, 0.0066, 1],'+
                    '[2, 7, 22, 0.0066, 1],'+
                    '[2, 7, 22, 0.0066, 1],'+
                    '[2, 7, 22, 0.0066, 1],'+
                    '[2, 7, 22, 0.0066, 1]'+
                ']'+
            '}]'+
        '}],'+
        '"summary": {'+
            '"lastOffset": 1,'+
            '"lastTimeStamp": 1,'+
            '"deviceConfig": [{'+
                '"component": {'+
                    '"id": "a11b22dd-1978-401c-a80b-c66cb1cba708",'+
                    '"type": "fuelband"'+
                '}'+
            '}]'+
        '}'+
   ' }'
*/
/*
{
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
}
*/
/*
		$.post({
      url: "https://api.nike.com/v2.0/me/sync?access_token=15a8a7e03452f68ec32f75ea116a9ab8",
      headers: "appid=FUELBAND",
      data: fake_data,
      success: function(response) {
         console.log(response);
       }
		})
		*/
}


