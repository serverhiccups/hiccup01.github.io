if (!window.jQuery) {
  var jq = document.createElement('script'); jq.type = 'text/javascript';
  // Path to jquery.js file, eg. Google hosted version
  jq.src = '/path-to-your/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(jq);
  $(document).ready(function(){
	alert('Code ran.');
    var scratch_player = $(".stage");
    var url = window.location.href;
    url = url.substr(33,40);
    $(scratch_player).empty();
    $(scratch_player).append("<script src=https://phosphorus.github.io/embed.js?id=", url, "&auto-start=false&light-content=false></script>");
});
} else {
$(document).ready(function(){
	alert('Code ran.');
    var scratch_player = $(".stage");
    var url = window.location.href;
    url = url.substr(33,40);
    $(scratch_player).empty();
    $(scratch_player).append("<script src=https://phosphorus.github.io/embed.js?id=", url, "&auto-start=false&light-content=false></script>");
});
}


