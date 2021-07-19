const messages = [
		"Error: New Posts must contain a title and message body!",
		"This is where the new post's title is entered.", 
		"This is where the new post's message is entered.",
		"You wrote: ",
		""
		];
		
var statusBuffer;

function infoHover(msgID) {
	statusUpdate(msgID);
}

function statusUpdate(msgID) {
	document.getElementById("status").innerHTML = messages[msgID];
}

function clearForm() {
	document.getElementById("ptitle").value = messages[4];
	document.getElementById("pbody").value = messages[4];
}

function validatePost() {
	var titleStr = document.getElementById("ptitle").value;
	var postStr = document.getElementById("pbody").value;
	
	if ((titleStr == "")||(ptitle == "")) {
		statusUpdate(0)
	} else {
		document.getElementById("status").innerHTML = titleStr + "\n" + postStr;
	}
		
}
