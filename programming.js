var count = 0;

function read() {
var mess = document.getElementById("userInput").value;
count = count + 1;
if(mess.indexOf("yes")!=-1)
{
	document.write("yes");
}
else
{
	document.write("no");	
}
//document.write(mess);
document.write(count);
}

$(document).ready(function() {
	$('.einput').click(function(event) {
		event.preventDefault();
		console.log(document.getElementById("userInput").value);
	});

});
