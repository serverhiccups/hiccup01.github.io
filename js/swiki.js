var searchterm = prompt("Enter your search term"); 
if searchterm == null {
  console.log("Error: null is invalid input.")
} else {
var url = "http://wiki.scratch.mit.edu/w/index.php?title=Special%3ASearch&profile=default&search=" + searchterm + "&fulltext=Search"; 
window.open(url);
}
