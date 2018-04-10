// Get the lists of elements in the name and subline classes
var connectionNames = document.getElementsByClassName("name actor-name");
var connectionJobs = document.getElementsByClassName("subline-level-1");
var resultString = "";

// Loop through them and print them to the console.
// TODO: Make them easier to get to. (document.write did not do what I wanted (permission denied))
for (var c = 0; c < connectionNames.length; ++c) {
	resultString += connectionNames[c].innerHTML + "<br>" + connectionJobs[c].innerHTML + "<br><br>"
}
document.write(resultString);


/*
// Single line versions of the above for the bookmarklet.
var connectionNames = document.getElementsByClassName("name actor-name"); var connectionJobs = document.getElementsByClassName("subline-level-1");for (var c = 0; c < connectionNames.length; ++c) {console.log(connectionNames[c].innerHTML, connectionJobs[c].innerHTML)}

var connectionNames = document.getElementsByClassName("name actor-name"); var connectionJobs = document.getElementsByClassName("subline-level-1");for (var c = 0; c < connectionNames.length; ++c) {document.write(connectionNames[c].innerHTML, connectionJobs[c].innerHTML)}

*/