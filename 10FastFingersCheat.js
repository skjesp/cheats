function cheat()
{	
	setInterval(() => {
		var highlightedText = $(".highlight").text();
		$("#inputfield").val(highlightedText + ' ');		
		
		// simulate spacebar press
		var press = jQuery.Event("keyup");
		press.ctrlKey = false;
		press.which = 32;
		$("#inputfield").trigger(press);			
	}, 180);
}
