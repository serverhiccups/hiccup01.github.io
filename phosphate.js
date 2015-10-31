$(document).ready(function(){
	function () { 
    var jQuery = document.createElement('script'); 
    jQuery.setAttribute('src', 'http://code.jquery.com/jquery-1.11.3.min.js');                  
  document.head.appendChild(jQuery); 
 }());
    var scratch_player = $(".stage");
    var url = window.location.href;
    url = url.substr(33,40);
    $(scratch_player).empty();
    $(scratch_player).append("<script src=https://phosphorus.github.io/embed.js?id=", url, "&auto-start=false&light-content=false></script>");
});

