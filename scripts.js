google.load('visualization', '1', {
	packages : ['corechart']
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Month');
	data.addColumn('number', 'Cases');
	data.addColumn({type:'string', role:'annotation'}); // annotationText col.

	data.addRows([
	["August 2014", 3052, ""],   ["September 2014", 7157, ""],  ["October 2014", 13567, ""],
	["November 2014", 15935, ""],  ["December 2014", 20206, ""],  ["January 2015", 22092, ""],
	["February 2015", 23729, "Last Available Data"]
	]);

	var options = {
		title: 'West African Ebola Cases Still Rising',
		width : 1000,
		height : 563,
		pointSize: 5,
		hAxis : {
			title : 'Month'
		},
		vAxis : {
			title : 'Incidences'
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('lineChart'));

	chart.draw(data, options);

}
