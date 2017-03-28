$(document).ready(function ()
{
	updateOpeningStatus();
	if(true)
	{
		// open
			// update background-color
		$("#opening-status").css('background-color', '#3d988a');
			// update text
		$("#opening-status h3").html("<emph>OPEN</emph>");
	}
	else
	{
		// close
			// update background-color
		$("#opening-status").css('background-color', '#e5425b');
			// update text
		$("#opening-status h3").html("<emph>GESLOTEN</emph>");
	}
});

function updateOpeningStatus()
{
	var openingHours = new Array(7);
	// sunday
	openingHours[0] = {};
	// monday
	openingHours[1] = {StartStop("10:00","11:00"), StartStop("18:00", "19:00")};
	// tuesday
	openingHours[2] = {StartStop("10:00","11:00"), StartStop("18:00", "19:00")};
	// wednesday
	openingHours[3] = {StartStop("10:00","11:00"), StartStop("18:00", "19:00")};
	// thursday
	openingHours[4] = {StartStop("10:00","11:00"), StartStop("18:00", "19:00")};
	// friday
	openingHours[5] = {StartStop("10:00","11:00"), StartStop("18:00", "19:00")};
	// saterday
	openingHours[6] = {StartStop("10:00","11:00")};

	var now = new Date();
	var hours = openingHours[now.getDay()];

	alert.(hours[0].start)

}

function StartStop(start, stop)
{
    this.start = start;
    this.stop = stop;
}
